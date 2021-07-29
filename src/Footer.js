import React from "react";
import styles from "./styles/PaletteFooterStyles";
import { withStyles } from "@material-ui/core/styles";

function Fotter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Fotter);
