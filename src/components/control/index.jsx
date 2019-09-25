
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

  render() {
    return (
      <div className="control-pannel">
        <button className="skip" onClick={this.handleSkip}>Skip</button>
        <button className="correct" onClick={this.handleCorrect}>Correct</button>
        <button className="wrong" onClick={this.handleWrong}>Wrong</button>
        <button className="stop-play" onClick={this.handlePlayStop}>{this.props.running ? "Stop" : "Play" }</button>
      </div>
    );
  }
}

export default Control;

