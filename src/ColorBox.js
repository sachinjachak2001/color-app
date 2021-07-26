import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { Link } from "react-router-dom";

import "./ColorBox.css";

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
    const { name, background, moreUrl, showLink } = this.props;
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
            <p className={isLightColor && "dark-text"}>{background}</p>
          </div>{" "}
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          {showLink && (
            <Link
              className={` see-more ${isLightColor && "dark-text"}`}
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
export default ColorBox;
