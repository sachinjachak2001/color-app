import sizes from "./sizes";
export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowY: "auto",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDireaction: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    margin: "10px 0",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1.5rem",
    },
  },
};
