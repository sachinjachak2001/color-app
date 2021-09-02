import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AddToPhotos } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";
import clsx from "clsx";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      formShowing: false,
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }
  showForm() {
    this.setState({
      formShowing: true,
    });
  }
  hideForm() {
    this.setState({ formShowing: false });
  }
  render() {
    const { classes, open, palettes, handleSubmit, handleDrawerOpen } =
      this.props;
    const { formShowing } = this.state;
    const { showForm, hideForm } = this;

    return (
      <div className="root">
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
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotos />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBts}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                GO BACK
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={showForm}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            hideForm={hideForm}
          />
        )}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
