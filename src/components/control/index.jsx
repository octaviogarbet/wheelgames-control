
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
    const {running, hasTime} = this.props;
    const playStop = running ? <svg><use xlinkHref={`${icons}#icon-pause`} /></svg> : <svg><use xlinkHref={`${icons}#icon-play`} /></svg>
    return (
      <div className="control-pannel">
        <button title="Word Pass" className="button" disabled={!hasTime} onClick={this.handleSkip}><svg><use xlinkHref={`${icons}#icon-notification`} /></svg></button>
        <button title="Correct" className="button" disabled={!hasTime} onClick={this.handleCorrect}><svg><use xlinkHref={`${icons}#icon-checkmark`} /></svg></button>
        <button title="Wrong" className="button" disabled={!hasTime} onClick={this.handleWrong}><svg><use xlinkHref={`${icons}#icon-cross`} /></svg></button>
        <button className="button" disabled={!hasTime} onClick={this.handlePlayStop}>{playStop}</button>
        <button title="Reset" className="button" onClick={this.handleReset}><svg><use xlinkHref={`${icons}#icon-reset`} /></svg></button>
      </div>
    );
  }
}

export default Control;

