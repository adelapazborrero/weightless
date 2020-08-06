import React, { Component } from "react";
import { motion } from "framer-motion";
import StylesUser from "./StylesUser";
import axios from "axios";

export default class SettingsMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      username: "",
      password: "",
    };

    this.handleImage = this.handleImage.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  async componentDidMount() {
    const data = await fetch(`http://localhost:8000/users/${this.props.id}`);
    const fetchedUser = await data.json();

    this.setState({
      image: fetchedUser.image,
      username: fetchedUser.username,
      password: fetchedUser.password,
    });
  }

  handleImage(e) {
    this.setState({
      image: e.target.value,
    });
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

  handleSubmit(e) {
    e.preventDefault();

    const updatedData = {
      image: this.state.image,
      username: this.state.username,
      password: this.state.password,
    };

    const relate = window.confirm("Do you want to update your data?");
    if (relate) {
      axios.put(
        `http://localhost:8000/users/updateuser/${this.props.id}`,
        updatedData
      );
      window.location = `/user/${this.props.username}`;
    } else {
      window.location = `/user/${this.props.username}`;
    }
  }

  deleteAccount(e) {
    e.preventDefault();

    const relate = window.confirm("Do you want to delete your account?");
    if (relate) {
      axios.delete(`http://localhost:8000/users/deleteuser/${this.props.id}`);
      window.location = `/`;
    } else {
      window.location = `/user/${this.props.username}`;
    }
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
            Settings
          </h2>
          <label>Profile Image</label>
          <input
            style={StylesUser.update_input}
            type="text"
            onChange={this.handleImage}
            value={this.state.image}
          />
          <label>Username</label>
          <input
            style={StylesUser.update_input}
            type="text"
            onChange={this.handleUsername}
            value={this.state.username}
          />
          <label>Password</label>
          <input
            style={StylesUser.update_input}
            type="password"
            onChange={this.handlePassword}
            value={this.state.password}
          />

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
            onClick={this.deleteAccount}
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
