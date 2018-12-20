import React, { Component } from 'react';
import './App.css';
import Page1 from './components/page1';
import AsyncComponent from './components/AsyncComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const { route } = this.state;
    if (route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (route === 'page2') {
      const Async2 = AsyncComponent(() => import('./components/page2'));
      return <Async2 onRouteChange={this.onRouteChange} />
    } else if (route === 'page3') {
      const Async3 = AsyncComponent(() => import('./components/page3'));
      return <Async3 onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
