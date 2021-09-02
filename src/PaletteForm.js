import React, { Component } from "react";
import { arrayMove } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import clsx from "clsx";
import styles from "./styles/PaletteFormStyles";

class PaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: this.props.palettes[0].colors,
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handlChange = this.handlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColor = this.clearColor.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newName: "",
    });
  }
  handlChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(newPalette) {
    (newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")),
      (newPalette.colors = this.state.colors);
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
  clearColor() {
    this.setState({ colors: [] });
  }
  addRandomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    var rand = Math.floor(Math.random * allColors.length);
    const randomColor = allColors[rand];
    this.setState({
      colors: [...this.state.colors, randomColor] || [randomColor],
    });
  }
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const {
      handleDrawerOpen,
      handleDrawerClose,
      handleSubmit,
      clearColor,
      addNewColor,
      addRandomColor,
      removeColor,
      onSortEnd,
    } = this;

    const paletteIsFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={handleSubmit}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              {" "}
              Create Your Palette{" "}
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={clearColor}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={addRandomColor}
                disabled={paletteIsFull}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            axis="xy"
            colors={colors}
            removeColor={removeColor}
            onSortEnd={onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteForm);
