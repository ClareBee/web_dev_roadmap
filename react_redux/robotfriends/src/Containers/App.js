import React, { Component } from 'react';
import './app.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';

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
    const { robots, searchField } = this.state;
    if (!robots.length){
      return <h1>Loading...</h1>
    } else {
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return (
        <div className="tc">
          <h1>RobotFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
