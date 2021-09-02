import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);

    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  handleClick() {
    this.props.goToPalette(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const { handleClick, deletePalette } = this;
    console.log("rendering", paletteName);
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon
          className={classes.deletIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={deletePalette}
        />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
