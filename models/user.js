const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    photo: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: {
        values: ["Alive", "Infected", "Dead"],
        message: "Value outside accepted fields",
      },
    },
    phoneNo: {
      type: Number,
      default: null,
    },
    history: {
      type: [
        {
          date: Date,
          event: String,
        },
      ],
    },
    vaccinationStatus: {
      type: Number,
      enum: [0, 1, 2],
    },
    organisation: {
      orgId: mongoose.Schema.Types.ObjectId,
      name: {
        type: String,
        default: "",
      },
      designation: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
