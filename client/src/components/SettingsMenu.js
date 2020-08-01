import React, { Component } from "react";
import { motion } from "framer-motion";
import StylesUser from "./StylesUser";

export default class SettingsMenu extends Component {
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
            Settings
          </h2>
          <label>Profile Image</label>
          <input style={StylesUser.update_input} type="text" />
          <label>Username</label>
          <input style={StylesUser.update_input} type="text" />
          <label>Password</label>
          <input style={StylesUser.update_input} type="password" />

          <input
            style={StylesUser.inputStyleSave}
            type="submit"
            value="UPDATE"
          />
          <button
            style={{
              fontFamily: "Poppins",
              border: "none",
              background: "none",
              color: "tomato",
              fontWeight: "bold",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Delete Acount
          </button>
        </motion.form>
      </div>
    );
  }
}

const variants1 = {
  open: { y: 0 },
  close: { y: "100vh" },
};
