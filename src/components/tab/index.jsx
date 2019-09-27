import React, { Component } from 'react'
import './tab.scss';

class Tab extends Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.team.name);
  }

  render() {
    return (
    <div className={"tab " +this.props.className} onClick={this.handleClick}>
      <span className="team-name">{this.props.team.name}</span> | <span className="score-correct">{this.props.team.correct}</span> | <span className="score-wrong">{this.props.team.wrong}</span>
    </div>
    );
  }
}

export default Tab;
