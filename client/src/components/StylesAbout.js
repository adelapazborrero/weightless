import Styles from "./Styles";

const StylesAbout = {
  link: {
    textDecoration: "none",
  },
  linkText: {
    padding: "15px",
    margin: "15px",
    fontFamily: Styles.mainFont,
    border: "none",
    outline: "none",
    color: "#EC407A",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "20px",
    position: "absolute",
    left: "40%",
    right: "40%",
  },
  meditation_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height:"100vh"
  },
  image_container: {
    width: "60%",
    position: "relative",
    zIndex: -1,
  },
  meditation: {
    width: "100%",
  },
  meditation_text: {
    fontFamily: Styles.mainFont,
    textAlign: "left",
    width: "50%",
    paddingRight: "40px",
  },
};

export default StylesAbout;
