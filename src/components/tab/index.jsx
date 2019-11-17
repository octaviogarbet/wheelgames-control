import React, { Component } from 'react'
import './tab.scss';

class Tab extends Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.team.name);
  }

  render() {
    const {className, team} = this.props;
    return (
    <div className={"tab " + className} onClick={this.handleClick}>
      <span className="team-name">{team.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="score-correct">{team.correct}</span>&nbsp;&nbsp;<span className="score-wrong">{team.wrong}</span>
    </div>
    );
  }
}

export default Tab;
