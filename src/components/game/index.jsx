import React, { Component } from 'react';
import Wheel from '../wheel';
import Timer from '../timer';
import './game.scss';

class Game extends Component {
  render() {
    const letters = this.props.letters;

    return (
      <main className="container">
        <div className="wheel-container">
          <Wheel letters={letters}/>        
        </div>
        <div className="game-pad">
          <Timer/>
        </div>
      </main>
    );
  }
}

export default Game;
