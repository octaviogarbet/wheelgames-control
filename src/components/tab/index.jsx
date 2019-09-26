import React, { Component } from 'react'
import './tab.scss';

class Tab extends Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.team);
  }

  render() {
    return <div className="tab" onClick={this.handleClick}>{this.props.team}</div>;
  }
}

export default Tab;
