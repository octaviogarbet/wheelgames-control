import React, { Component } from 'react';
import Wheel from '../wheel';
import Timer from '../timer';
import Control from '../control';
import './game.scss';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {running: false};
  }

  handlePlayStopChange = () => {
    this.setState({
      running: !this.state.running
    });
  }

  render() {
    const letters = this.props.letters;

    return (
      <main className="container">
        <div className="wheel-container">
          <Wheel letters={letters}/>        
        </div>
        <div className="game-pad">
          <Control running={this.state.running} onPlayStopChange={this.handlePlayStopChange}/>
          <Timer running={this.state.running}/>
        </div>
      </main>
    );
  }
}

export default Game;
