import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';

import { generatePalette } from './colorhelper';

class App extends Component {
  findPalette(id) {
    const cols = seedColors.find((palette) => {
      return palette.id === id;
    });
    return cols;
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList paletts={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            ></Palette>
          )}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
