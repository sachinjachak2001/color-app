import React from "react";

function Fotter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="Palette-fotter">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default Fotter;
