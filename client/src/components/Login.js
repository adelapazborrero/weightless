import React, { Component } from "react";
import Styles from "./Styles";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      currentUser: "",
      redirect: false,
    };
    this.findUser = this.findUser.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async findUser(e) {
    e.preventDefault();

    const data = await fetch(
      `http://localhost:8000/users/filtered/${this.state.username}`
    );
    const user = await data.json();

    this.setState({
      currentUser: user,
    });

    if (this.state.currentUser[0].password === this.state.password) {
      this.setState({ redirect: true });
    } else {
      console.log("showsomething");
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={{ pathname: `/user/${this.state.username}`, state: this.state.currentUser }} />;
    }
    return (
      <motion.div
        style={Styles.form_div}
        variants={variants1}
        initial={{ y: "-200%", opacity: 0 }}
        animate={this.props.opened ? "opened" : "closed"}
      >
        <form style={Styles.login_form} onSubmit={this.findUser}>
          <label htmlFor="username" style={Styles.label}>
            Username
          </label>

          <input
            style={Styles.input}
            type="text"
            name="username"
            onChange={this.handleUsername}
          />
          <br />
          <label htmlFor="password" style={Styles.label}>
            Password
          </label>

          <input
            style={Styles.input}
            type="password"
            name="password"
            onChange={this.handlePassword}
          />
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
