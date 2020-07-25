import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Styles from "./Styles";

export default class ExerciseChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { date: "16-06", walking_time: 20, running_time: 50, exercise: 15 },
        { date: "17-06", walking_time: 40, running_time: 50, exercise: 30 },
        { date: "18-06", walking_time: 0, running_time: 50, exercise: 15 },
        { date: "19-06", walking_time: 10, running_time: 50, exercise: 45 },
        { date: "20-06", walking_time: 30, running_time: 45, exercise: 15 },
        { date: "21-06", walking_time: 40, running_time: 30, exercise: 60 },
        { date: "22-06", walking_time: 10, running_time: 60, exercise: 45 },
        { date: "23-06", walking_time: 60, running_time: 50, exercise: 15 },
        { date: "24-06", walking_time: 0, running_time: 45, exercise: 40 },
        { date: "25-06", walking_time: 15, running_time: 50, exercise: 30 },
        { date: "26-06", walking_time: 25, running_time: 50, exercise: 15 },
        { date: "27-06", walking_time: 20, running_time: 45, exercise: 25 },
        { date: "28-06", walking_time: 45, running_time: 50, exercise: 45 },
        { date: "29-06", walking_time: 10, running_time: 60, exercise: 15 },
        { date: "30-06", walking_time: 30, running_time: 50, exercise: 15 },
        { date: "31-06", walking_time: 20, running_time: 50, exercise: 15 },
      ],
    };
  }

  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h2 style={{ fontFamily: Styles.mainFont, fontWeight:"normal" }}>Exercise record</h2>
        <LineChart width={600} height={300} data={this.state.data}>
          <Line type="monotone" dataKey="walking_time" stroke="#FFB100" />
          <Line type="monotone" dataKey="running_time" stroke="#90CAF9" />
          <Line type="monotone" dataKey="exercise" stroke={Styles.mainColor} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
