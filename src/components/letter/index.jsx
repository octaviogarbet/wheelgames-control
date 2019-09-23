import React, { Component } from 'react'

class Letter extends Component {
  render() {
    return <li><div className={this.props.status}><h1>{this.props.letter}</h1></div></li>;
  }
}

export default Letter;
