import React, { Component } from 'react';
import Button from '../Button/Button.component';
import Result from '../Result/Result.component';
import './Counter.component.css';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }

  componentDidMount() {
    console.log('Komponent has been mounted: ', this.state);
  }

  componentDidUpdate() {
    console.log('Komponent has been updated: ', this.state);
  }

  increaseCounter = () => (this.setState({ counter: this.state.counter + 1 }))
  decreaseCounter = () => (this.setState({ counter: this.state.counter - 1 }))
  resetCounter = () => (this.setState({ counter: 0 }))


  render() {
    return (
      <div className="App">
        <Result result={this.state.counter} />
        <Button name="+" action={ this.increaseCounter } />
        <Button name="Resetuj" action={ this.resetCounter } />
        <Button name="-" action={ this.decreaseCounter } />
        
      </div>
    );
  }
}

export default Counter;
