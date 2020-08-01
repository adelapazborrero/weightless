import React, { Component } from "react";
import { motion } from "framer-motion";
import StylesUser from "./StylesUser";
import axios from "axios";

export default class DeleteRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const deletethis = {
      username: this.props.username,
      date: this.state.date,
    };

    console.log(deletethis);

    axios.delete(
      `http://localhost:8000/users/delete/${this.props.username}/${this.state.date}`,
      deletethis
    );

    window.location = `/user/${this.props.username}`;
  }

  handleDate(e) {
    this.setState({
      date: e.target.value,
    });
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
        >
          <h2 style={{ fontFamily: "Poppins", fontWeight: "normal" }}>
            Delete Record
          </h2>
          <label>What is the date?</label>
          <input
            style={StylesUser.update_input}
            type="date"
            onChange={this.handleDate}
          />

          <input
            style={StylesUser.inputStyleSave}
            type="submit"
            value="DELETE"
          />
        </motion.form>
      </div>
    );
  }
}

const variants1 = {
  open: { y: 0 },
  close: { y: "100vh" },
};
