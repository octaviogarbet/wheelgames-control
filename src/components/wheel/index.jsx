import React, { Component } from 'react';
import Letter from '../letter';
import './wheel.scss';

class Wheel extends Component {
  render() {
    const letters = this.props.letters;
    const listItems = letters.map((letter) =>
      <Letter key={letter.toString()}
                letter={letter} status='initial'/>

    );
    return (
      <ul className='circle-container'>
        {listItems}
      </ul>
    );
  }
}

export default Wheel;
