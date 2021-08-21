import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: " relative",
    cursor: "pointer",
    marginBottom: "-3.8px",
    "&:hover svg": {
      color: "white",
      transform: "Scale(2.0)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={props.classes.root} style={{ background: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon className={classes.deletIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
