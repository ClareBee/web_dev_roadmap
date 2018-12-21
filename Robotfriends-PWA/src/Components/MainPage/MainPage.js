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

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const { robots, isPending, onSearchChange } = this.props;
    return (
      <div className="tc">
        <Header />
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading...</h1> :
          <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}


export default MainPage;
