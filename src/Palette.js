import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevels = this.changeLevels.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevels(level) {
    this.setState({ level: level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevels={this.changeLevels}
          handleChange={this.changeFormat}
        />

        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-fotter">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;
