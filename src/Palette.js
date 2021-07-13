import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: 500,
    };
    this.changeLevels = this.changeLevels.bind(this);
  }
  changeLevels(level) {
    this.setState({ levels: level });
  }
  render() {
    const { colors } = this.props.palette;
    const { levels } = this.state;
    const colorBoxes = colors[levels].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={levels}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevels}
          />
        </div>
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {/* Bunch of color- boxes goes here */}
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}
export default Palette;
