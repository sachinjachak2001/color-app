import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevels = this.changeLevels.bind(this);
  }
  changeLevels(level) {
    this.setState({ level: level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevels={this.changeLevels} />
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
