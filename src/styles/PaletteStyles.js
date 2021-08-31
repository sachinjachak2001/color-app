import sizes from "./sizes";
export default {
  Palette: {
    height: "100vh",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: " relative",
    cursor: "pointer",
    marginBottom: "-3.8px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: " 100px",
      height: "30px",
      position: "absolute",
      display: " inline-block",
      top: "50%",
      left: " 50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      outline: "none",
      border: " none",
      borderRadius: "5px",
      backgroundColor: " rgba(255, 255, 255, 0.3)",
      textAlign: " center",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      textDecoration: " none",
      opacity: 1,
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
};
