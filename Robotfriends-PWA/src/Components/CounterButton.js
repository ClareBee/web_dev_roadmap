import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props){
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    // or use PureComponent
    if (this.state.count !== nextState.count){
      return true
    } else {
      return false
    }
  }

  updateCount = () => {
    // setState can have side effects when reliant on prevState/currentState
    this.setState(state => {
      return { count: this.state.count + 1 }
    })
  }

  render(){
    return (
    <button
      id="counter"
      colour={this.props.colour}
      onClick={this.updateCount}
    >
      Count: {this.state.count}
    </button>
    )
  }
}

export default CounterButton;
