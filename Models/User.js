const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  image: String,
  username: String,
  password: String,
  goal: Number,
  currentWeight: Number,
  daily: Array /*[
    {
      date: Date,
      todays_weight: Number,
      walking_time: Number,
      running_time: Number,
      exercising_time: Number,
    },
  ],*/
});

module.exports = mongoose.model("User", userSchema);
