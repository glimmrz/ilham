import { connectDb } from "@/lib/db/connectDb";
import Address from "@/lib/models/Address";
import User from "@/lib/models/User";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

// Add address
export async function POST(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "unauthorized. " }, { status: 400 });

    const body = await request.json();

    await connectDb();

    const newAddress = new Address({
      ...body,
      user: user.payload._id,
    });

    await User.findByIdAndUpdate(
      user?.payload?._id,
      {
        $push: { addresses: newAddress._id },
      },
      {
        new: true,
      }
    );
    await newAddress.save();

    return NextResponse.json(
      { msg: "Address added successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        msg: err.message,
      },
      { status: 400 }
    );
  }
}

// Delete address
export async function DELETE(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "unauthorized. " }, { status: 400 });

    const body = await request.json();

    await connectDb();
    const dbUser = await User.findById(user.payload._id);
    const availableAddress = dbUser.addresses.indexOf(body._id);

    if (!dbUser || availableAddress === -1)
      return NextResponse.json(
        { msg: "Cannot delete address. Please try a different one." },
        { status: 400 }
      );

    await Address.findByIdAndDelete(body._id);
    await User.updateOne(
      {
        _id: user.payload._id,
      },
      {
        $pull: { addresses: { _id: body._id } },
      }
    );

    return NextResponse.json(
      { msg: "Address deleted successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        msg: err.message,
      },
      { status: 400 }
    );
  }
}

// Update address
export async function PUT(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "unauthorized. " }, { status: 400 });

    const body = await request.json();

    await connectDb();
    const dbUser = await User.findById(user.payload._id);

    if (!dbUser || dbUser.addresses.indexOf(body._id) === -1)
      return NextResponse.json(
        { msg: "Cannot update address. Please try a different one." },
        { status: 400 }
      );

    const filteredData = {};

    for (const [key, val] of Object.entries(body)) {
      if (val) {
        filteredData[key] = val;
      }
    }

    await Address.findByIdAndUpdate(body._id, filteredData, { new: true });

    return NextResponse.json(
      { msg: "Address updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        msg: err.message,
      },
      { status: 400 }
    );
  }
}
