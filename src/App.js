import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./ColorHelper";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>this is home route</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>this is palette route</h1>}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
