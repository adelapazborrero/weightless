import React, { Component } from "react";
import { motion } from "framer-motion";
import StylesUser from "./StylesUser";
import axios from "axios";

export default class UpdateGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newgoal: "",
    };
    this.handleGoal = this.handleGoal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGoal(e) {
    this.setState({
      newgoal: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      goal: this.state.newgoal,
    };
    console.log(this.props.username);

    const sendData = await axios.put(
      `http://localhost:8000/users/changegoal/${this.props.username}`,
      newGoal
    );

    window.location = `/user/${this.props.username}`;
  }

  render() {
    return (
      <div>
        <motion.form
          style={StylesUser.diff_menus}
          onSubmit={this.handleSubmit}
          initial={{ y: "100vh" }}
          animate={this.props.opened ? "open" : "close"}
          variants={variants1}
          transition={{
            type: "spring",
            damping: 800,
            mass: 0.1,
          }}
        >
          <h2 style={{ fontFamily: "Poppins", fontWeight: "normal" }}>
            Update Goal
          </h2>
          <label>What is your next goal!!</label>
          <input
            style={StylesUser.update_input}
            type="number"
            onChange={this.handleGoal}
          />

          <input style={StylesUser.inputStyleSave} type="submit" value="SAVE" />
        </motion.form>
      </div>
    );
  }
}

const variants1 = {
  open: { y: 0 },
  close: { y: "100vh" },
};
