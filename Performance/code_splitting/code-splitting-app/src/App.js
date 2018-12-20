import React, { Component } from 'react';
import './App.css';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
    // code splitting thanks to webpack & dynamic imports
    if (route === 'page1'){
      this.setState({route: route})
    } else if (route === 'page2'){
      // async
      import('./components/page2')
      .then((Page2) => {
        this.setState({
          route: route,
          component: Page2.default
        });
      });
    } else if (route === 'page3'){
      import('./components/page3')
      .then((Page3) => {
        this.setState({
          route: route,
          component: Page3.default
        });
      });
    }
  }

  render() {
    const { route } = this.state;
    if (route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange} />
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
