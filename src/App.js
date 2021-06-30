import seedColors from "./seedColors";
import Palette from "./Palette";

function App() {
  return (
    <div>
      <Palette {...seedColors[3]} />
    </div>
  );
}

export default App;
