import React, { Component } from 'react'
import './timer.scss';

class Timer extends Component {
  running = false;
  constructor(props) {
    super(props);
    this.state = {minutes: '02', seconds: '00'};
  }

  startTimer = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.running = true;
  }

  stopTimer = () => {
    clearInterval(this.timerID);
    this.running = false;
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  tick() {
    let minutes = this.state.minutes;
    let seconds = this.state.minutes;
    if (this.state.seconds === '00') {
      if (this.state.minutes === '00') {
        clearInterval(this.timerID);
        this.props.onHasTimeChange(false);
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

  addMinute = () => {
    this.props.onHasTimeChange(true);
    let minutes = +this.state.minutes + 1
    minutes = minutes >= 10 ? minutes + '' : '0' + minutes;
    this.setState({ minutes: minutes });
  }

  addSeconds = () => {
    this.props.onHasTimeChange(true);
    let seconds = +this.state.seconds + 10
    if (seconds >= 60) {
      seconds = seconds - 60;
      this.addMinute();
    }
    seconds = seconds >= 10 ? seconds + '' : '0' + seconds;
    this.setState({ seconds: seconds });
  }

  removeMinute = () => {
    let minutes = +this.state.minutes - 1
    if (minutes >= 0) {
      minutes = minutes >= 10 ? minutes + '' : '0' + minutes;
      this.setState({ minutes: minutes });
    }
  }

  removeSeconds = () => {
    let seconds = +this.state.seconds - 10
    if (seconds < 0) {
      seconds = seconds + 60;
      this.removeMinute();
    }
    seconds = seconds >= 10 ? seconds + '' : '0' + seconds;
    this.setState({ seconds: seconds });
  }

  render() {
    if (this.props.running && !this.running) {
      this.startTimer();
    } else if (!this.props.running && this.running) {
      this.stopTimer();
    }
    return (
      <div className="timer">
        <div className="controls">
          <button className="moreTime" onClick={this.addMinute}>+1</button>
          <button className="moreTime" onClick={this.addSeconds}>+1</button>
        </div>
        <div className="clock">
          <span className={this.props.hasTime ? "has-time" : "time-expired"}>{this.state.minutes} : {this.state.seconds}</span>
        </div>
        <div className="controls">
          <button className="lessTime" onClick={this.removeMinute}>-1</button>
          <button className="lessTime" onClick={this.removeSeconds}>-1</button>
        </div>
      </div>
    );
  }
}

export default Timer;
