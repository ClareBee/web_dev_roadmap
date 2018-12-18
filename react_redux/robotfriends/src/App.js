import React, { Component } from 'react';
import CardList from './Components/CardList';
import Searchbox from './Components/Searchbox';
import { robots } from './robots.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    }
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RobotFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
