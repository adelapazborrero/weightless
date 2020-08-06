import React, { Component } from "react";
import StylesUser from "./StylesUser";
import axios from "axios";
import { motion } from "framer-motion";
import searchIcon from "../images/icon-search.png";

export default class UpdateDaily extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      todays_weight: "",
      walking_time: "",
      running_time: "",
      exercising_time: "",
    };

    this.handleDate = this.handleDate.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleWalkingTime = this.handleWalkingTime.bind(this);
    this.handleRunningTime = this.handleRunningTime.bind(this);
    this.handleExercise = this.handleExercise.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchDate = this.searchDate.bind(this);
  }

  //Searches for the input date and fetches the data to display it on the form
  async searchDate(e) {
    e.preventDefault();
    try {
      const fetchedData = await fetch(
        `http://localhost:8000/users/checkdailydata/${this.props.username}/${this.state.date}`
      );
      const user = await fetchedData.json();

      this.setState({
        todays_weight: user[0].todays_weight,
        walking_time: user[0].walking_time,
        running_time: user[0].running_time,
        exercising_time: user[0].exercising_time,
      });
    } catch (error) {
      this.setState({
        todays_weight: "",
        walking_time: "",
        running_time: "",
        exercising_time: "",
      });
    }
  }

  async handleDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  handleWeight(e) {
    this.setState({
      todays_weight: e.target.value,
    });
  }

  handleWalkingTime(e) {
    this.setState({
      walking_time: e.target.value,
    });
  }

  handleRunningTime(e) {
    this.setState({
      running_time: e.target.value,
    });
  }

  handleExercise(e) {
    this.setState({
      exercising_time: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const newDaily = {
      username: this.props.username,
      date: this.state.date,
      todays_weight: this.state.todays_weight,
      walking_time: this.state.walking_time,
      running_time: this.state.running_time,
      exercising_time: this.state.exercising_time,
    };
    console.log(newDaily);
    const sendDdata = await axios.put(
      `http://localhost:8000/users/updatefeed/${this.props.username}`,
      newDaily
    );
    window.location = `/user/${this.props.username}`;
  }

  render() {
    return (
      <div>
        <motion.form
          style={StylesUser.diff_menus}
          onSubmit={this.handleSubmit}
          initial={{ y: "100vh" }}
          animate={this.props.opened ? "open" : "close"}
          variants={variants1}
          transition={{
            type: "spring",
            damping: 800,
            mass: 0.1,
          }}
        >
          <h2 style={{ fontFamily: "Poppins", fontWeight: "normal" }}>
            Update Info
          </h2>
          <div style={{ display: "flex" , width:"70%"}}>
            <input
              style={StylesUser.update_input}
              type="date"
              value={this.state.date}
              onChange={this.handleDate}
            />
            <img
              src={searchIcon}
              style={StylesUser.searchButton}
              onClick={this.searchDate}
            />
          </div>

          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Weight"
            onChange={this.handleWeight}
            value={this.state.todays_weight}
          />
          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Walking time"
            onChange={this.handleWalkingTime}
            value={this.state.walking_time}
          />
          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Running time"
            onChange={this.handleRunningTime}
            value={this.state.running_time}
          />
          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Exercising time"
            onChange={this.handleExercise}
            value={this.state.exercising_time}
          />
          <input style={StylesUser.inputStyleSave} type="submit" value="SAVE" />
        </motion.form>
      </div>
    );
  }
}

const variants1 = {
  open: { y: 0 },
  close: { y: "100vh" },
};
