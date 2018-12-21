import React, { Component } from 'react';
import './MainPage.css';
import ErrorBoundary from '../ErrorBoundary';
import CardList from '../CardList';
import Header from '../Header';
import Searchbox from '../Searchbox';
import Scroll from '../Scroll';

class MainPage extends Component {
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
          <Header />
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


export default MainPage;
