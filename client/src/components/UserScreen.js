import React, { Component } from "react";
import WeightChart from "./WeightChart";
import StylesUser from "./StylesUser";
import ExerciseChart from "./ExerciseChart";
import UpdateToday from "./UpdateToday";
import UpdateDaily from "./UpdateDaily";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let todayDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${day}`;

    this.state = {
      currentUser: this.props.location.state[0],
      username: "",
      date: todayDate,
      goalWeight: "",
      currentWeight: "",
      daily: [],
      image: "",
      difference: this.currentWeight - this.goalWeight,
      id: "",
    };
  }

  async componentDidMount() {
    const data = await fetch(
      `http://localhost:8000/users/${this.state.currentUser._id}`
    );
    const person = await data.json();

    const dates = await person.daily.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    this.setState({
      username: person.username,
      //currentWeight: person.daily.slice(-1)[0].todays_weight,
      goalWeight: person.goal,
      image: person.image,
      daily: dates,
      id: person._id,
    });

    //EXPERIMENTAL
    if (person.daily == undefined) {
      this.setState({
        currentWeight: 0,
      });
    } else {
      this.setState({
        currentWeight: person.daily.slice(-1)[0].todays_weight,
      });
    }
  }

  render() {
    return (
      <div style={StylesUser.user_screen}>
        {/* LEFT SITE FORM */}
        <UpdateToday
          username={this.state.username}
          date={this.state.date}
          id={this.state.id}
        />
        <UpdateDaily
          image={this.state.image}
          username={this.state.username}
          date={this.state.date}
          id={this.state.id}
        />

        {/*Current stats */}
        <div style={StylesUser.todays_data}>
          <div style={StylesUser.todays_data_container}>
            <h3>Current</h3>
            <h3 style={{ fontWeight: "normal" }}>
              {this.state.currentWeight}kg
            </h3>
          </div>
          <div style={StylesUser.todays_data_container}>
            <h3>Goal</h3>
            <h3 style={{ fontWeight: "normal" }}>{this.state.goalWeight}kg</h3>
          </div>
          <div style={StylesUser.todays_data_container}>
            <h3>Diff</h3>
            <h3 style={{ fontWeight: "normal" }}>
              {(this.state.currentWeight - this.state.goalWeight).toFixed(1)}kg
            </h3>
          </div>
        </div>

        {/*CHARTS */}
        <WeightChart daily={this.state.daily} />
        <ExerciseChart daily={this.state.daily} />
      </div>
    );
  }
}
