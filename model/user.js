const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      data: Buffer,
      contentType: String
    },
    publishedSummaries:[],
    publishedChallenge:String 
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

