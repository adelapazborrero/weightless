import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import Styles from "./Styles"

export default class WeightChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { date: "16", kg: "64.7" },
        { date: "17", kg: "62.2" },
        { date: "18", kg: "59" },
        { date: "19", kg: "57" },
        { date: "20", kg: "39" },
        { date: "21", kg: "47" },
        { date: "22", kg: "72" },
        { date: "23", kg: "58" },
      ],
    };
  }
  render() {
    return (
      <div>
        <LineChart width={600} height={300} data={this.state.data}>
          <Line type="monotone" dataKey="kg" stroke={Styles.mainColor} />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </div>
    );
  }
}
