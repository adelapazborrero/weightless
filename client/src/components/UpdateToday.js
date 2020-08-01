import React, { Component } from "react";
import StylesUser from "./StylesUser";
import axios from "axios";

export default class UpdateToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
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
  }

  handleDate(e) {
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

    const sentData = await axios.put(
      "http://localhost:8000/users/updatedaily",
      newDaily
    );

    //ADD TO IF STATEMENT TO UPDATE ONLY ON THE LATEST DATE
    const sendCurrent = await axios.post(
      `http://localhost:8000/users/update/${this.props.id}`,
      { currentWeight: this.state.todays_weight }
    );
    window.location = `/user/${this.props.username}`;
  }
  render() {
    return (
      <div>
        <form style={StylesUser.info_form} onSubmit={this.handleSubmit}>
          <h2>Welcome, {this.props.username}</h2>
          <h2 style={StylesUser.info_title}>Today's info</h2>

          {/*INPUTS */}
          <input
            style={StylesUser.inputStyle}
            type="date"
            value={this.state.date}
            onChange={this.handleDate}
          />
          <input
            style={StylesUser.inputStyle}
            type="number"
            placeholder="Weight"
            step="0.1"
            onChange={this.handleWeight}
          />
          <input
            style={StylesUser.inputStyle}
            type="number"
            placeholder="Walking time"
            onChange={this.handleWalkingTime}
          />
          <input
            style={StylesUser.inputStyle}
            type="number"
            placeholder="Running time"
            onChange={this.handleRunningTime}
          />
          <input
            style={StylesUser.inputStyle}
            type="number"
            placeholder="Exercising time"
            onChange={this.handleExercise}
          />
          <input style={StylesUser.inputStyleSave} type="submit" value="SAVE" />
        </form>
      </div>
    );
  }
}
