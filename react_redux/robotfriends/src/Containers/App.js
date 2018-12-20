import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render() {
    const { robots, isPending, searchField, onSearchChange } = this.props;
    if (isPending){
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
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
