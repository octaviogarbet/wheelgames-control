import React, { Component } from 'react';
import Letter from '../letter';
import './wheel.scss';

class Wheel extends Component {
  render() {
    const letters = this.props.letters;
    const listItems = letters.map((letter) =>
      <Letter key={letter.label.toString()}
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
