import mongoose from "mongoose";

const withdrawalScema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["paid", "pending", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Withdrawal =
  mongoose.models.withdrawal || mongoose.model("withdrawal", withdrawalScema);

export default Withdrawal;
