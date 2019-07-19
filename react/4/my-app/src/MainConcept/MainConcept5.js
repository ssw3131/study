import React from 'react';

class FormattedDate extends React.Component {
  render() {
    return <h2>It is {this.props.date.toLocaleTimeString()}.</h2>;
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval( this.timerID );
  }

  tick() {
    this.setState( { date: new Date() } );
    this.setState( state => ( { counter: ++state.counter } ) );
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
class MainConcept5 extends React.Component {

  render() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}

export default MainConcept5;
