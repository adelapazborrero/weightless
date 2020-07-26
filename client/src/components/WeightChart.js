import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Styles from "./Styles";

export default class WeightChart extends Component {
    
  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h2 style={{fontFamily: Styles.mainFont, fontWeight:"normal"}}>Weight record</h2>
        <LineChart width={600} height={300} data={this.props.daily}>
          <Line type="monotone" dataKey="todays_weight" stroke={Styles.mainColor} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
