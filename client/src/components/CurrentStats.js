import React, { Component } from "react";
import StylesUser from "./StylesUser";

export default class CurrentStats extends Component {
  render() {
    return (
      <div style={StylesUser.todays_data}>
        <div style={StylesUser.todays_data_container}>
          <h3>Current</h3>
          <h3 style={{ fontWeight: "normal" }}>{this.props.currentWeight}kg</h3>
        </div>
        <div style={StylesUser.todays_data_container}>
          <h3>Goal</h3>
          <h3 style={{ fontWeight: "normal" }}>{this.props.goalWeight}kg</h3>
        </div>
        <div style={StylesUser.todays_data_container}>
          <h3>Diff</h3>
          <h3 style={{ fontWeight: "normal" }}>
            {(this.props.currentWeight - this.props.goalWeight).toFixed(1)}kg
          </h3>
          <h1>hello world</h1>
        </div>
      </div>
    );
  }
}
