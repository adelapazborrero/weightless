const express = require("express");
const User = require("../Models/User");
const mongoose = require("mongoose");

//Setting the route middleware
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

//FIND USER BY NAME ON THE LOGIN SCREEN 
route.get("/filtered/:username", async (req, res) => {
  try {
    const filtername = req.params.username;
    const filtered = await User.find({
      username: filtername,
    });
    res.json(filtered);
  } catch (error) {
    res.json({ message: error });
  }
});

//------------

//ADD NEW USER FROM SIGNIN SCREEN
route.post("/addnewuser", async (req, res) => {
  const newUser = new User({
    image: req.body.image,
    username: req.body.username,
    password: req.body.password,
    goal: req.body.goal,
    currentWeight: req.body.currentWeight,
    daily: [],
  });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

//PUSH NEW DAILY INTO ARRAY OF SPECIFIC PERSON
route.put("/updatedaily", async (req, res) => {
  const newFeed = {
    _id: mongoose.Types.ObjectId(),
    date: req.body.date,
    todays_weight: req.body.todays_weight,
    walking_time: req.body.walking_time,
    running_time: req.body.running_time,
    exercising_time: req.body.exercising_time,
  };

  try {
    const userfound = await User.updateOne(
      { username: req.body.username },
      { $push: { daily: [newFeed] } }
    );
    res.json(userfound);
  } catch (error) {
    res.json(error);
  }
});

//UPDATE A SPECIFIC DAILY NEED TO GET THE SPECIFIC OBJECT INSTEAD OF USER 
route.put("/updatefeed/:username", async (req, res) => {
  try {
    const filtername = req.params.username;
    const daily = await User.updateOne(
      { username: filtername, "daily.date": req.params.date },
      {
        $set: {
          "daily.$.date": req.body.date,
          "daily.$.todays_weight": req.body.todays_weight,
          "daily.$.walking_time": req.body.walking_time,
          "daily.$.running_time": req.body.running_time,
          "daily.$.exercising_time": req.body.exercising_time,
        },
      }
    );
    res.json(daily);
  } catch (error) {
    res.json(error);
  }
});

module.exports = route;
