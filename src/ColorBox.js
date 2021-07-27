import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import "./ColorBox.css";
import { purple } from "@material-ui/core/colors";

const styles = {
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
    textDecoration: "none",
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.06;
    const isLightColor = chroma(background).luminance() >= 0.8;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>{" "}
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          {showLink && (
            <Link
              className={classes.seeMore}
              to={moreUrl}
              onClick={(e) => e.stopPropagation()}
            >
              <span>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);
