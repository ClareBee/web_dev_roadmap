import React, { Component } from 'react';
import './app.css';
import CardList from './Components/CardList';
import Searchbox from './Components/Searchbox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      this.setState({robots: users});
    });
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    if (this.state.robots.length === 0){
      return <h1>Loading...</h1>
    } else {
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
}

export default App;
