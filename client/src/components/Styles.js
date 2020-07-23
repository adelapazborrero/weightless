const mainColor = "#E53935";
const mainFont = "Poppins";
const hoverColor = "#730023";

const styles = {
  mainpage: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  title_section: {
    display: "flex",
    flexDirection: " column",
    justifyContent: "center",
    alignItems: "end",
    width: "40%",
    //backgroundColor:"skyblue"
  },
  title: {
    fontFamily: mainFont,
    textAlign: "left",
    fontSize: "60px",
    paddingLeft: "30px",
  },
  subtext: {
    fontFamily: mainFont,
    color: "grey",
    textAlign: "left",
    fontSize: "18px",
    position: "relative",
    bottom: "30px",
    paddingLeft: "30px",
  },
  button_holder: {
    paddingLeft: "30px",
  },
  button1: {
    padding: "15px",
    margin: "15px",
    fontFamily: mainFont,
    border: "none",
    outline: "none",
    backgroundColor: mainColor,
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
  },
  button2: {
    padding: "15px",
    margin: "15px",
    fontFamily: mainFont,
    border: "none",
    outline: "none",
    color: mainColor,
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
  image_section: {
    width: "40%",
  },
  link: {
    textDecoration: "none",
  },
  linkText: {
    padding: "15px",
    margin: "15px",
    fontFamily: mainFont,
    border: "none",
    outline: "none",
    color: mainColor,
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "20px",
    position: "absolute",
    top: "20px",
    left: "300px",
  },
  image_container: {
    width: "70%",
    position: "relative",
    zIndex: -1,
  },
  image: {
    width: "100%",
  },

  //FROM HERE LOGIN AND SIGNIN POPUP STYLES
  form_div: {
    width: "600px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    boxShadow: "0px 10px 10px 2px lightgrey",
    position: "absolute",
    top: "25%",
    bottom: "25%",
    right: "25%",
    left: "25%",
    backgroundColor: "rgb(255, 255, 255, 0.8)",
  },
  login_form: {
    width: "60%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "end",
  },
  input: {
    padding: "10px",
    width: "90%",
    outline: "none",
    border: `solid 1px ${mainColor}`,
    fontFamily: mainFont,
  },
  label: {
    padding: "15px 0px",
    fontFamily: mainFont,
    color: mainColor,
    fontWeight: "bold",
    fontSize: "16px",
  },
  hoverColor: hoverColor,
  mainFont: mainFont,
  mainColor: mainColor,
};

export default styles;
