import React, { Component } from "react";
import WeightChart from "./WeightChart";
import StylesUser from "./StylesUser";
import ExerciseChart from "./ExerciseChart";
import UpdateToday from "./UpdateToday";

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
      difference: this.currentWeight - this.goalWeight,
    };
  }

  async componentDidMount() {
    const data = await fetch(
      `http://localhost:8000/users/${this.state.currentUser._id}`
    );
    const person = await data.json();

    this.setState({
      username: person.username,
      currentWeight: person.currentWeight,
      goalWeight: person.goal,
      daily: person.daily,
    });
  }

  render() {
    return (
      <div style={StylesUser.user_screen}>
        {/* LEFT SITE FORM */}
        <UpdateToday username={this.state.username} date={this.state.date}/>

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

        <div>
          <form style={StylesUser.update_form}>
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "100%",
                background:
                  "url(https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/11924940_1007936535895309_2033047478123485509_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=OFgLZKMBmTwAX8t0mia&_nc_ht=scontent-mad1-1.xx&oh=6b0c08c5377b247f69c3ce968765aa0e&oe=5F3ED0EC)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0px 5px 10px 0px grey",
              }}
            ></div>
            <h2 style={{ fontFamily: "Poppins", fontWeight: "normal" }}>
              Update Info
            </h2>
            <input
              style={StylesUser.update_input}
              type="date"
              value={this.state.date}
            />
            <input
              style={StylesUser.update_input}
              type="number"
              placeholder="Weight"
            />
            <input
              style={StylesUser.update_input}
              type="number"
              placeholder="Walking time"
            />
            <input
              style={StylesUser.update_input}
              type="number"
              placeholder="Running time"
            />
            <input
              style={StylesUser.update_input}
              type="number"
              placeholder="Exercising time"
            />
            <input
              style={StylesUser.inputStyleSave}
              type="submit"
              value="SAVE"
            />
          </form>
        </div>
      </div>
    );
  }
}
