
import React, { Component } from 'react'
import './control.scss';
import icons from './../../assets/sprite.svg';

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
    const playStop = this.props.running ? <svg><use xlinkHref={`${icons}#icon-pause`} /></svg> : <svg><use xlinkHref={`${icons}#icon-play`} /></svg>
    return (
      <div className="control-pannel">
        <button className="button" disabled={!this.props.hasTime} onClick={this.handleSkip}><svg><use xlinkHref={`${icons}#icon-notification`} /></svg></button>
        <button className="button" disabled={!this.props.hasTime} onClick={this.handleCorrect}><svg><use xlinkHref={`${icons}#icon-checkmark`} /></svg></button>
        <button className="button" disabled={!this.props.hasTime} onClick={this.handleWrong}><svg><use xlinkHref={`${icons}#icon-cross`} /></svg></button>
        <button className="button" disabled={!this.props.hasTime} onClick={this.handlePlayStop}>{playStop}</button>
        <button className="button" onClick={this.handleReset}><svg><use xlinkHref={`${icons}#icon-reset`} /></svg></button>
      </div>
    );
  }
}

export default Control;

