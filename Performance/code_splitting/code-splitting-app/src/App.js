import React, { Component } from 'react';
import './App.css';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'page1'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    const { route } = this.state;
    if(route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (route === 'page2'){
      return <Page2 onRouteChange={this.onRouteChange} />
    } else {
      return <Page3 onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
