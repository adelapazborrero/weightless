import React, { Component } from "react";
import WeightChart from "./WeightChart";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Xiangyi",
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.username}</h1>
        <WeightChart />
      </div>
    );
  }
}
