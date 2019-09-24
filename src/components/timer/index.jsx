import React, { Component } from 'react'
import './timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {minutes: '02', seconds: '00'};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let minutes = this.state.minutes;
    let seconds = this.state.minutes;
    if (this.state.seconds === '00') {
      if (this.state.minutes === '00') {
        clearInterval(this.timerID);
      } else {
        seconds = '59'
        minutes = +this.state.minutes - 1
        minutes = minutes >= 10 ? minutes + '' : '0' + minutes;
      }
    } else {
      seconds = +this.state.seconds - 1
      seconds = seconds >= 10 ? seconds + '' : '0' + seconds;
    }
    this.setState({
      seconds: seconds,
      minutes: minutes
    });
  }

  render() {
    return (
      <div className="timer">
        <span>{this.state.minutes} : {this.state.seconds}</span>
      </div>
    );
  }
}

export default Timer;
