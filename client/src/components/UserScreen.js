import React, { Component } from "react";
import WeightChart from "./WeightChart";
import StylesUser from "./StylesUser";
import ExerciseChart from "./ExerciseChart";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let todayDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${day}`;

    this.state = {
      username: "Xiangyi",
      date: todayDate,
      goalWeight: 58,
      currentWeight: 62.7,
      difference: this.currentWeight - this.goalWeight,
    };
  }
  render() {
    return (
      <div style={StylesUser.user_screen}>
          {/* LEFT SITE FORM */}
        <div>
          <form style={StylesUser.info_form}>
            <h2>Welcome, {this.state.username}</h2>
            <h2 style={StylesUser.info_title}>Today's info</h2>
            <input
              style={StylesUser.inputStyle}
              type="date"
              value={this.state.date}
            />
            <input
              style={StylesUser.inputStyle}
              type="number"
              placeholder="Weight"
            />
            <input
              style={StylesUser.inputStyle}
              type="number"
              placeholder="Walking time"
            />
            <input
              style={StylesUser.inputStyle}
              type="number"
              placeholder="Running time"
            />
            <input
              style={StylesUser.inputStyle}
              type="number"
              placeholder="Exercising time"
            />
            <input style={StylesUser.inputStyle} type="submit" value="SAVE" />
          </form>
        </div>

        {/*Current stats */}
        <div style={StylesUser.todays_data}>
          <div style={StylesUser.todays_data_container}>
            <h3>Current</h3>
            <h3>{this.state.currentWeight}kg</h3>
          </div>
          <div style={StylesUser.todays_data_container}>
            <h3>Goal</h3>
            <h3>{this.state.goalWeight}kg</h3>
          </div>
          <div style={StylesUser.todays_data_container}>
            <h3>Diff</h3>
            <h3>
              {(this.state.currentWeight - this.state.goalWeight).toFixed(1)}kg
            </h3>
          </div>
        </div>

        {/*CHARTS */}
        <WeightChart />
        <ExerciseChart />

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
            <h2 style={{ fontFamily: "Poppins" }}>Update Info</h2>
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
            <input style={StylesUser.update_input} type="submit" value="SAVE" />
          </form>
        </div>
      </div>
    );
  }
}
