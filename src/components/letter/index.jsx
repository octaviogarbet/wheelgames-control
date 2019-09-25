import React, { Component } from 'react'
import './letter.scss';

class Letter extends Component {
  render() {
    return <li><div className={this.props.isActive ? "active "+this.props.status : this.props.status}><span className="wheel-item">{this.props.letter}</span></div></li>;
  }
}

export default Letter;
