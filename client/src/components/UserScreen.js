import React, { Component } from "react";
import { motion } from "framer-motion";
import WeightChart from "./WeightChart";
import StylesUser from "./StylesUser";
import ExerciseChart from "./ExerciseChart";
import UpdateToday from "./UpdateToday";
import UpdateDaily from "./UpdateDaily";
import CurrentStats from "./CurrentStats";
import UpdateGoal from "./UpdateGoal";
import DeleteRecord from "./DeleteRecord";
import SettingsMenu from "./SettingsMenu";

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let todayDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
      day < 10 ? `0${day}` : `${day}`
    }`;

    this.state = {
      currentUser: this.props.location.state[0],
      username: "",
      date: todayDate,
      goalWeight: "",
      currentWeight: "",
      daily: [],
      image: "",
      difference: this.currentWeight - this.goalWeight,
      id: "",
      //Open different menus
      open_update_menu: false,
      open_goal_menu: false,
      open_delete_menu: false,
      open_settings_menu: false,
      close_button: false,
    };

    this.openUpdate = this.openUpdate.bind(this);
    this.openGoal = this.openGoal.bind(this);
    this.openDelete = this.openDelete.bind(this);
    this.openSettings = this.openSettings.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  async componentDidMount() {
    const data = await fetch(
      `http://localhost:8000/users/${this.state.currentUser._id}`
    );
    const person = await data.json();

    const dates = await person.daily.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    this.setState({
      username: person.username,
      //currentWeight: person.daily.slice(-1)[0].todays_weight,
      goalWeight: person.goal,
      image: person.image,
      daily: dates,
      id: person._id,
    });

    //EXPERIMENTAL
    if (person.daily == undefined) {
      this.setState({
        currentWeight: 0,
      });
    } else {
      this.setState({
        currentWeight: person.daily.slice(-1)[0].todays_weight,
      });
    }
  }

  //OPEN MENUS
  openUpdate() {
    this.setState({
      open_update_menu: true,
      close_button: true,
    });
  }

  openGoal() {
    this.setState({
      open_goal_menu: true,
      close_button: true,
    });
  }

  openDelete() {
    this.setState({
      open_delete_menu: true,
      close_button: true,
    });
  }

  openSettings() {
    this.setState({
      open_settings_menu: true,
      close_button: true,
    });
  }

  closeMenu() {
    this.setState({
      open_update_menu: false,
      open_goal_menu: false,
      open_delete_menu: false,
      open_settings_menu: false,
      close_button: false,
    });
  }

  render() {
    try {
      return (
        <div style={StylesUser.user_screen}>
          {/* LEFT SITE FORM */}
          <UpdateToday
            username={this.state.username}
            date={this.state.date}
            id={this.state.id}
          />

          {/*RIGHT MENUS */}
          <UpdateDaily
            image={this.state.image}
            username={this.state.username}
            date={this.state.date}
            id={this.state.id}
            opened={this.state.open_update_menu}
          />
          <UpdateGoal
            opened={this.state.open_goal_menu}
            username={this.state.username}
          />
          <DeleteRecord
            opened={this.state.open_delete_menu}
            username={this.state.username}
            date={this.state.date}
          />
          <SettingsMenu
            opened={this.state.open_settings_menu}
            username={this.state.username}
            id={this.state.currentUser._id}
          />

          {/*Current stats */}
          <CurrentStats
            goalWeight={this.state.goalWeight}
            currentWeight={this.state.currentWeight}
          />

          {/*CHARTS */}
          <WeightChart daily={this.state.daily} />
          <ExerciseChart daily={this.state.daily} />

          {/*RIGHT MENU WITH PHOTO AND BUTTONS */}
          <div style={StylesUser.update_form}>
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "100%",
                backgroundImage: `url(${this.state.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0px 5px 5px 0px grey",
              }}
            ></div>
            <motion.button
              style={StylesUser.closeButton}
              onClick={this.closeMenu}
              initial={{ opacity: 0, pointerEvents: "none" }}
              animate={this.state.close_button ? "open" : "close"}
              variants={variantsopen}
              transition={{ delay: 0.2 }}
            >
              Close
            </motion.button>

            <button style={StylesUser.buttonsMenu} onClick={this.openGoal}>
              UPDATE GOAL
            </button>
            <button style={StylesUser.buttonsMenu} onClick={this.openUpdate}>
              UPDATE RECORD
            </button>
            <button style={StylesUser.buttonsMenu} onClick={this.openDelete}>
              DELETE RECORD
            </button>
            <button style={StylesUser.buttonsMenu} onClick={this.openSettings}>
              SETTINGS
            </button>
            <button
              style={{
                fontFamily: "Poppins",
                border: "none",
                background: "none",
                color: "dodgerblue",
                fontWeight: "bold",
                cursor: "pointer",
                outline: "none",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      );
    } catch (error) {
      return (
        <div>
          <h1>You need to be logged in to access this information</h1>
        </div>
      );
    }
  }
}

const variantsopen = {
  open: { opacity: 1, pointerEvents: "auto" },
  close: { opacity: 0, pointerEvents: "none" },
};
