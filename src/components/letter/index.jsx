import React, { Component } from 'react'
import './letter.scss';

class Letter extends Component {
  render() {
    const {isActive, status, letter} = this.props
    return <li><div className={isActive ? "active "+status : status}><span className="wheel-item">{letter}</span></div></li>;
  }
}

export default Letter;
