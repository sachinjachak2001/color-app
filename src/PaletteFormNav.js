import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
    };
    this.handlChange = this.handlChange.bind(this);
  }
  componentDidMount() {
    // custom rule will have name 'isPaletteNameUnique'
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handlChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    const { classes, open } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm
              onSubmit={() => this.props.handleSubmit(newPaletteName)}
            >
              <TextValidator
                label="Palette Name"
                value={this.state.newPaletteName}
                name="newPaletteName"
                onChange={this.handlChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette Name required",
                  "Palette name is taken",
                ]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
              <Link to="/">
                <Button variant="contained" color="secondary">
                  GO BACK
                </Button>
              </Link>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default PaletteFormNav;