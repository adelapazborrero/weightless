import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Styles from "./Styles";

export default class WeightChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { date: "16-06", kg: "64.7" },
        { date: "17-06", kg: "64.5" },
        { date: "18-06", kg: "64" },
        { date: "19-06", kg: "63.9" },
        { date: "20-06", kg: "63.5" },
        { date: "21-06", kg: "63.6" },
        { date: "22-06", kg: "63.1" },
        { date: "23-06", kg: "60" },
        { date: "24-06", kg: "59.6" },
        { date: "25-06", kg: "59.4" },
        { date: "26-06", kg: "59" },
        { date: "27-06", kg: "58.9" },
        { date: "28-06", kg: "58.2" },
        { date: "29-06", kg: "58.4" },
        { date: "30-06", kg: "58.6" },
        { date: "31-06", kg: "58.3" },
      ],
    };
  }
  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h2 style={{fontFamily: Styles.mainFont}}>Weight record</h2>
        <LineChart width={600} height={300} data={this.state.data}>
          <Line type="monotone" dataKey="kg" stroke={Styles.mainColor} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
