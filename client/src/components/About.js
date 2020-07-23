import React, { Component } from "react";
import { Link } from "react-router-dom";
import meditation from "../images/meditation.png";
import StylesAbout from "./StylesAbout";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={StylesAbout.link}>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={StylesAbout.linkText}
          >
            Back
          </motion.p>
        </Link>
        <div style={StylesAbout.meditation_container}>
          <div style={StylesAbout.image_container}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={StylesAbout.meditation}
              src={meditation}
              alt="meditation"
            />
          </div>
          <div style={StylesAbout.meditation_text}>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              For health and well-being
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={{ color: "#EC407A" }}
            >
              Keep track of your dailys with just a few clicks
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Set up a goal weight within a certain ammount of time.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Follow up daily you walking time, running time, exercising time
              and weight.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Push yourself to reach your goal before the limit time you set
              yourself.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              For any questions contact the admin{" "}
              <span
                style={{ borderBottom: "1.5px solid #EC407A", fontWeight: 500 }}
              >
                <a
                  href="https://www.abeldlp.com/contact"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  here
                </a>
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    );
  }
}
