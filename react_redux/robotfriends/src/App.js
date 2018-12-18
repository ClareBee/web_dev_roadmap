import React, { Component } from 'react';
import CardList from './Components/CardList.js';
import { robots } from './robots.js';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <CardList robots={robots} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
