import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import { setSearchField } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      this.setState({robots: users});
    });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    if (!robots.length){
      return <h1>Loading...</h1>
    } else {
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return (
        <div className="tc">
          <h1>RobotFriends</h1>
          <Searchbox searchChange={onSearchChange}/>
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
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
