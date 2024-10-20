import User from "@/lib/models/User";
import Withdrawal from "@/lib/models/Withdraw";
import mongoose from "mongoose";
import { connectDb } from "@/lib/db/connectDb";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  let session;
  try {
    await connectDb();
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized." }, { status: 401 });

    const body = await request.json();

    const requestedAmount = body.amount * 100; // Convert to cents

    // Validate input before transaction
    if (requestedAmount <= 0) {
      return NextResponse.json({ msg: "Invalid amount" }, { status: 400 });
    }

    session = await mongoose.startSession();
    session.startTransaction();

    const existingUser = await User.findById(user.payload._id).session(session);
    if (!existingUser.bkash)
      return NextResponse.json(
        { msg: "Please add a bkash account number first." },
        { status: 400 }
      );

    if (!existingUser || existingUser.availableComission < requestedAmount) {
      await session.abortTransaction();
      return NextResponse.json(
        { msg: "Insufficient amount available." },
        { status: 400 }
      );
    }

    const newWithdrawal = new Withdrawal({
      amount: requestedAmount,
      user: existingUser._id,
    });

    // Update user balance and pending withdrawals
    await User.findByIdAndUpdate(
      existingUser._id,
      {
        $inc: {
          availableComission: -requestedAmount,
          pendingWithdrawal: requestedAmount,
        },
        $push: {
          withdrawalRequests: newWithdrawal._id,
        },
      },
      {
        new: true,
        session: session,
      }
    );

    // Save the withdrawal request
    await newWithdrawal.save({ session });

    // Commit the transaction
    await session.commitTransaction();

    return NextResponse.json({ msg: "Request submitted." }, { status: 200 });
  } catch (err) {
    if (session) {
      await session.abortTransaction();
    }
    return NextResponse.json({ msg: err.message }, { status: 400 });
  } finally {
    if (session) {
      session.endSession(); // End the session in a finally block
    }
  }
}

// Get all withdrawal requests
export async function GET(request) {
  try {
    const user = await verifyToken(request);
    if (user.payload?.role?.toLowerCase() !== "admin")
      NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();

    const withdrawalRequests = await Withdrawal.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "name bkash",
      });

    return NextResponse.json({
      msg: "Data found.",
      payload: withdrawalRequests,
    });
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
