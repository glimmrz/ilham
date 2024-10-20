import User from "@/lib/models/User";
import Withdrawal from "@/lib/models/Withdraw";
import { connectDb } from "@/lib/db/connectDb";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const user = await verifyToken(request);
    if (user.payload?.role?.toLowerCase() !== "admin")
      NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();

    const body = await request.json();

    const existingWithdrawal = await Withdrawal.findById(params.id);

    const previousStatus = existingWithdrawal.status.toLowerCase();
    const newStatus = body.status.toLowerCase();

    await Withdrawal.findByIdAndUpdate(params.id, {
      status: body.status,
    });
    if (previousStatus === "pending" && newStatus === "paid") {
      await User.findByIdAndUpdate(
        existingWithdrawal.user,
        {
          $inc: {
            pendingWithdrawal: -existingWithdrawal.amount,
            withdrawnComission: existingWithdrawal.amount,
          },
        },
        {
          new: true,
        }
      );
    } else if (previousStatus === "pending" && newStatus === "cancelled") {
      await User.findByIdAndUpdate(
        existingWithdrawal.user,
        {
          $inc: {
            pendingWithdrawal: -existingWithdrawal.amount,
            cancelledComission: existingWithdrawal.amount,
          },
        },
        {
          new: true,
        }
      );
    } else if (previousStatus === "paid" && newStatus === "pending") {
      await User.findByIdAndUpdate(
        existingWithdrawal.user,
        {
          $inc: {
            pendingWithdrawal: existingWithdrawal.amount,
            withdrawnComission: -existingWithdrawal.amount,
          },
        },
        {
          new: true,
        }
      );
    } else if (previousStatus === "paid" && newStatus === "cancelled") {
      await User.findByIdAndUpdate(
        existingWithdrawal.user,
        {
          $inc: {
            cancelledComission: existingWithdrawal.amount,
            withdrawnComission: -existingWithdrawal.amount,
          },
        },
        {
          new: true,
        }
      );
    } else if (previousStatus === "cancelled" && newStatus === "paid") {
      await User.findByIdAndUpdate(
        existingWithdrawal.user,
        {
          $inc: {
            cancelledComission: -existingWithdrawal.amount,
            withdrawnComission: existingWithdrawal.amount,
          },
        },
        {
          new: true,
        }
      );
    } else if (previousStatus === "cancelled" && newStatus === "pending") {
      await User.findByIdAndUpdate(
        existingWithdrawal.user,
        {
          $inc: {
            cancelledComission: -existingWithdrawal.amount,
            pendingWithdrawal: existingWithdrawal.amount,
          },
        },
        {
          new: true,
        }
      );
    }

    return NextResponse.json(
      { msg: "Status updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
