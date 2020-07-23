import React, { Component } from "react";
import Styles from "./Styles";
import { motion } from "framer-motion";

export default class Login extends Component {
  render() {
    return (
      <motion.div
        style={Styles.form_div}
        variants={variants1}
        initial={{ y: "-200%", opacity: 0 }}
        animate={this.props.opened ? "opened" : "closed"}
      >
        <form style={Styles.login_form}>
          <label htmlFor="username" style={Styles.label}>
            Username
          </label>

          <input style={Styles.input} type="text" name="username" />
          <br />
          <label htmlFor="password" style={Styles.label}>
            Password
          </label>

          <input style={Styles.input} type="password" name="password" />
          <br />
          <motion.input
            whileHover={{ backgroundColor: Styles.hoverColor }}
            
            type="submit"
            value="Log in"
            style={Styles.button1}
          />
        </form>
      </motion.div>
    );
  }
}

const variants1 = {
  opened: { y: 0, opacity: 1, zIndex: 1 },
  closed: { y: "-20%", opacity: 0, zIndex: -1, transition: { duration: 0.2 } },
};
