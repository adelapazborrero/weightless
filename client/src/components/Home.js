import React, { Component } from "react";
import Login from "./Login";
import Signin from "./Signin";
import Styles from "./Styles";
import yoga from "../images/fogg-education.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login_open: false,
      signin_open: false,
    };

    this.openlogin = this.openlogin.bind(this);
    this.opensignin = this.opensignin.bind(this);
  }

  openlogin() {
    if (!this.state.signin_open) {
      this.setState({
        login_open: !this.state.login_open,
      });
    }
  }

  opensignin() {
    if (!this.state.login_open) {
      this.setState({
        signin_open: !this.state.signin_open,
      });
    }
  }

  render() {
    return (
      <div style={Styles.mainpage}>
        <Link to="/about" style={Styles.link}>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ color: Styles.hoverColor, transition: { delay: 0 } }}
            style={Styles.linkText}
          >
            About
          </motion.p>
        </Link>

        {/* SECTION FOR TITLE SUBTITLE AND LOGIN AND SIGN IN BUTTONS */}
        <div style={Styles.title_section}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={Styles.title}
          >
            Health&Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={Styles.subtext}
          >
            A place where your weight is as light as air
          </motion.p>
          <div style={Styles.button_holder}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                backgroundColor: Styles.hoverColor,
                transition: { delay: 0 },
              }}
              style={Styles.button1}
              onClick={this.openlogin}
            >
              Log in
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{
                color: Styles.hoverColor,
                transition: { delay: 0 },
              }}
              style={Styles.button2}
              onClick={this.opensignin}
            >
              Sign in
            </motion.button>
          </div>
        </div>

        {/* SECTION FOR ILLUSTRATION  */}
        <div style={Styles.image_container}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={Styles.image}
            src={yoga}
            alt="yoga"
          />
        </div>

        {/* SECTION FOR ABOUT BUTTON and login signin holders */}
        <Login opened={this.state.login_open} />
        <Signin opened={this.state.signin_open} />
      </div>
    );
  }
}
