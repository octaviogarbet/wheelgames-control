import React, { Component } from 'react'
import './letter.scss';

class Letter extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.letter);
  }

  render() {
    const {isActive, status, letter} = this.props
    return <li onClick={this.handleClick}><div className={isActive ? "active "+status : status}><span className="wheel-item">{letter}</span></div></li>;
  }
}

export default Letter;
