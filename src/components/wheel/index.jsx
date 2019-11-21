import React, { Component } from 'react';
import Letter from '../letter';
import './wheel.scss';

class Wheel extends Component {

  handleClick = (letter) => {
    this.props.handleClick(letter);
  }

  render() {
    const letters = this.props.letters;
    const listItems = letters.map((letter) =>
      <Letter key={letter.label.toString()} handleClick={this.handleClick}
                letter={letter.label} status={letter.state} isActive={letter.label === this.props.active}/>

    );
    return (
      <ul className='circle-container'>
        {listItems}
      </ul>
    );
  }
}

export default Wheel;
