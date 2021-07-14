import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    let { level, changeLevels } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>level:{level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevels}
            />
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
