import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Styles from "./Styles";

export default class ExerciseChart extends Component {
  
  

  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h2 style={{ fontFamily: Styles.mainFont, fontWeight:"normal" }}>Exercise record</h2>
        <LineChart width={600} height={300} data={this.props.daily}>
          <Line type="monotone" dataKey="walking_time" stroke="#FFB100" />
          <Line type="monotone" dataKey="running_time" stroke="#90CAF9" />
          <Line type="monotone" dataKey="exercising_time" stroke={Styles.mainColor} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
