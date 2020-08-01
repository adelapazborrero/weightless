import React, { Component } from "react";
import Styles from "./Styles";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let todayDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${day}`;

    this.state = {
      currentuser: "",
      image: "",
      username: "",
      password: "",
      goal: "",
      currentWeight: "",
      date: todayDate,
      userSaved: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleGoal = this.handleGoal.bind(this);
    this.handleCurrentWeight = this.handleCurrentWeight.bind(this);
  }

  handleCurrentWeight(e) {
    this.setState({
      currentWeight: e.target.value,
    });
  }

  handleImage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleGoal(e) {
    this.setState({
      goal: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    //!NEED TO DOUBLE CHECK IF NAME EXISTS
    //POSTS A NEW USER TO THE DATABASE
    const newUser = {
      image: this.state.image,
      username: this.state.username,
      password: this.state.password,
      goal: this.state.goal,
      currentWeight: this.state.currentWeight,
      daily: [],
    };
    const datatosave = await axios.post(
      "http://localhost:8000/users/addnewuser",
      newUser
    );

    //CREATES THE FIRST LOG OF WEIGHT NEEDED TO OPEN THE PAGE
    const newDaily = {
      username: this.state.username,
      date: this.state.date,
      todays_weight: this.state.currentWeight,
      walking_time: "0",
      running_time: "0",
      exercising_time: "0",
    };
    const sentData = await axios.put(
      "http://localhost:8000/users/updatedaily",
      newDaily
    );

    //FETCHES THE DATA OF THE CREATED USER AND REDIRECTS
    const fetchedData = await fetch(
      `http://localhost:8000/users/filtered/${this.state.username}`
    );

    const user = await fetchedData.json();

    this.setState({
      currentUser: user,
    });

    this.setState({ userSaved: true });
  }

  render() {
    const { userSaved } = this.state;

    if (userSaved) {
      return (
        <Redirect
          to={{
            pathname: `/user/${this.state.username}`,
            state: this.state.currentUser,
          }}
        />
      );
    }
    return (
      <div>
        <motion.div
          style={Styles.form_div_signin}
          variants={variants1}
          initial={{ y: "-200%", opacity: 0 }}
          animate={this.props.opened ? "opened" : "closed"}
        >
          <form style={Styles.signin_form} onSubmit={this.handleSubmit}>
            <label htmlFor="image" style={Styles.label}>
              User Image
            </label>
            <input
              style={Styles.input}
              type="text"
              name="image"
              placeholder="Paste the url of an imgage"
              onChange={this.handleImage}
            />
            <br />
            <label htmlFor="username" style={Styles.label}>
              Username
            </label>
            <input
              style={Styles.input}
              type="text"
              name="username"
              placeholder="Set your login username"
              onChange={this.handleUsername}
            />
            <br />
            <label htmlFor="password" style={Styles.label}>
              Password
            </label>
            <input
              style={Styles.input}
              type="password"
              name="password"
              placeholder="Set your login password"
              onChange={this.handlePassword}
            />
            <br />
            <label style={Styles.label}>Current and Goal</label>
            <input
              style={Styles.input}
              type="number"
              placeholder="What is your current weight in kg?"
              onChange={this.handleCurrentWeight}
            />
            <input
              style={Styles.input}
              type="number"
              placeholder="What is your goal weight in kg?"
              onChange={this.handleGoal}
            />
            <br />
            <motion.input
              whileHover={{ backgroundColor: Styles.hoverColor }}
              type="submit"
              value="Sign in"
              style={Styles.button1}
            />
          </form>
        </motion.div>
      </div>
    );
  }
}

const variants1 = {
  opened: { y: 0, opacity: 1, zIndex: 1 },
  closed: { y: "-20%", opacity: 0, zIndex: -1, transition: { duration: 0.2 } },
};
