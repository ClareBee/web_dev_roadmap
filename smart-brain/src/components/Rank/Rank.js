import React from 'react';

class Rank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emoji: ''
    }
  }

  componentDidMount(){
    this.generateEmoji(this.props.entries)
  }
  generateEmoji = (entries) => {
    console.log(process.env)
    const lambdaUrl = `https://${process.env.REACT_APP_LAMBDA_URL}/production/rank?rank=${entries}`
    console.log(lambdaUrl)
    fetch(lambdaUrl)
      .then(res => res.json())
      .then(data => this.setState({emoji: data.input}))
      .catch(err => console.log(err));
  }
  render() {
    const { name, entries } = this.props;
    return (
      <div>
        <div className='white f3'>
          {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {entries}
        </div>
        <div className='white f3'>
          {`Rank Badge: ${this.state.emoji}`}
        </div>
      </div>
    );
  }
}

export default Rank;
