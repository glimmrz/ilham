import Address from "@/lib/models/Address";
import { connectDb } from "@/lib/db/connectDb";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const user = await verifyToken(request);
    if (user.error)
      return NextResponse.json({ msg: "Unauthorized." }, { status: 400 });

    await connectDb();

    const addresses = await Address.find({ user: user.payload?._id }).sort({
      createdAt: -1,
    });

    return NextResponse.json(
      { msg: "Data found.", payload: addresses },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
