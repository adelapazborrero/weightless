import Styles from "./Styles";

const StylesUser = {
  user_screen: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  info_title: {
    color: "black",
  },
  info_form: {
    fontFamily: Styles.mainFont,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "300px",
    backgroundColor: "white",
    borderRight: `1px solid ${Styles.mainColor}`,
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
  },
  inputStyle: {
    padding: "10px",
    width: "70%",
    fontFamily: Styles.mainFont,
    outline: "none",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#EFEFEF",
  },
  todays_data: {
    margin: "0 auto",
    width: "500px",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: Styles.mainFont,
  },

  todays_data_container: {
    width: "120px",
    margin: "10px",
    borderRadius: "10px",
    backgroundColor: "white",
    color: Styles.mainColor,
  },
  update_form: {
    fontFamily: Styles.mainFont,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "300px",
    backgroundColor: "white",
    borderLeft: `solid 1px ${Styles.mainColor}`,
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
  },
  update_input: {
    padding: "10px",
    width: "70%",
    fontFamily: Styles.mainFont,
    outline: "none",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#EFEFEF",
  },
};

export default StylesUser;
