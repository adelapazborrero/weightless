import React, { Component } from "react";
import StylesUser from "./StylesUser";
import axios from "axios";

export default class UpdateDaily extends Component {
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
        <form style={StylesUser.update_form} onSubmit={this.handleSubmit}>
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "100%",
              background: `url(${this.props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 5px 5px 0px grey",
            }}
          ></div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: "normal" }}>
            Update Info
          </h2>
          <input
            style={StylesUser.update_input}
            type="date"
            value={this.state.date}
            onChange={this.handleDate}
          />
          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Weight"
            onChange={this.handleWeight}
          />
          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Walking time"
            onChange={this.handleWalkingTime}
          />
          <input
            style={StylesUser.update_input}
            type="number"
            placeholder="Running time"
            onChange={this.handleRunningTime}
          />
          <input
            style={StylesUser.update_input}
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
