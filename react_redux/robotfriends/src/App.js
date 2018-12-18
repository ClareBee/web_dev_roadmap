import React, { Component } from 'react';
import Card from './Components/Card.js';
import { robots } from './robots.js';
class App extends Component {
  displayRobots = (data) => {
    return data.map(robot => <Card key={robot.name} index={robot.index} name={robot.name} username={robot.username} email={robot.email} />);
  }
  render() {
    const robotData = robots;
    return (
      <div className="App">
        <header className="App-header">
          <h1>initial commit</h1>
          <div>
            {this.displayRobots(robotData)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
