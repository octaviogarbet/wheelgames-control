
import React, { Component } from 'react'
import './control.scss';

class Control extends Component {
  handlePlayStop = () => {
    this.props.onPlayStopChange();
  }

  render() {
    return (
      <div className="control-pannel">
        <button className="stop-play" onClick={this.handlePlayStop}>{this.props.running ? "Stop" : "Play" }</button>
      </div>
    );
  }
}

export default Control;

