import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./ColorHelper";

function App() {
  console.log();

  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
