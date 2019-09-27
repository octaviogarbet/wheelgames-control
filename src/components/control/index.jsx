
import React, { Component } from 'react'
import './control.scss';

class Control extends Component {
  handlePlayStop = () => {
    this.props.onPlayStopChange();
  }

  handleSkip = () => {
    this.props.onSkip();
  }

  handleCorrect = () => {
    this.props.onCorrect();
  }

  handleWrong = () => {
    this.props.onWrong();
  }

  handleReset = () => {
    this.props.onReset();
  }

  render() {
    return (
      <div className="control-pannel">
        <button className="skip" disabled={!this.props.hasTime} onClick={this.handleSkip}>Skip</button>
        <button className="correct" disabled={!this.props.hasTime} onClick={this.handleCorrect}>Correct</button>
        <button className="wrong" disabled={!this.props.hasTime} onClick={this.handleWrong}>Wrong</button>
        <button className={this.props.running ? "stop" : "play" } disabled={!this.props.hasTime} onClick={this.handlePlayStop}></button>
        <button className="reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Control;

