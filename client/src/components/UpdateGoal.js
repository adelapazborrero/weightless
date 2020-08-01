import React, { Component } from "react";
import { motion } from "framer-motion";
import StylesUser from "./StylesUser";

export default class UpdateGoal extends Component {
  render() {
    return (
      <div>
        <motion.form
          style={StylesUser.diff_menus}
          onSubmit={this.handleSubmit}
          initial={{ y: "100vh" }}
          animate={this.props.opened ? "open" : "close"}
          variants={variants1}
        >
          <h2 style={{ fontFamily: "Poppins", fontWeight: "normal" }}>
            Update Goal
          </h2>
          <label>What is your next goal!!</label>
          <input style={StylesUser.update_input} type="number" />

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
