import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required"],
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      minlength: [4, "Name must be at least 4 characters"],
      maxlength: [32, "Name must not exceed 32 characters"],
    },
    address: {
      type: String,
      trim: true,
      required: [true, "Address is required"],
      minlength: [10, "Address must be at least 10 characters"],
      maxlength: [256, "Address must not exceed 100 characters"],
    },
    zipCode: {
      type: String,
      trim: true,
      required: false,
      minlength: [4, "Zip code must be at least 4 characters"],
      maxlength: [10, "Zip code must not exceed 10 characters"],
    },
    city: {
      type: String,
      trim: true,
      required: [true, "City is required"],
      minlength: [4, "City must be at least 4 characters"],
      maxlength: [32, "City must not exceed 32 characters"],
    },
    email: {
      type: String,
      trim: true,
      required: false,
      validate: {
        validator: function (v) {
          return !v || (v.length >= 4 && v.length <= 32);
        },
        message: "Email must be between 4 and 32 characters.",
      },
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Phone number is required"],
      minlength: [11, "Phone number must be at least 11 characters"],
      maxlength: [14, "Phone number must not exceed 14 characters"],
    },
    country: {
      type: String,
      trim: true,
      required: false,
      default: "bangladesh",
      minlength: [4, "Country must be at least 4 characters"],
      maxlength: [32, "Country must not exceed 32 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Address =
  mongoose.models.address || mongoose.model("address", addressSchema);

export default Address;
