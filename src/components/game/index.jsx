import React, { Component } from 'react';
import Wheel from '../wheel';
import Timer from '../timer';
import Control from '../control';
import './game.scss';

class Game extends Component {
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(props) {
    super(props);
    const listItems = this.letters.map((letter) => ({label: letter, state: 'initial'}));
    this.state = {
      running: false,
      activeIndex: 0,
      items: listItems
    };
  }

  goToNext = () => {
    let index = this.state.activeIndex + 1;
    let nextIndex = this.state.items.indexOf((item => item.state === 'initial'), index);
    if (nextIndex >= 0) {
      this.setState({activeIndex: nextIndex});
    } else {
      nextIndex = this.state.items.indexOf((item => item.state === 'initial'));
      if (nextIndex >= 0) {
        this.setState({activeIndex: nextIndex});
      } 
    }
  }

  handleCorrect = () => {
    this.setState({
      items: this.state.items[this.state.activeIndex].state = 'correct'
    });
    this.goToNext();
  }

  handleWrong = () => {
    this.setState({
      items: this.state.items[this.state.activeIndex].state = 'wrong'
    });
    this.goToNext();
  }

  handleSkip = () => {
    this.goToNext();
    this.setState({
      running: !this.state.running
    });
  }

  handlePlayStopChange = () => {
    this.setState({
      running: !this.state.running
    });
  }

  render() {
    return (
      <main className="container">
        <div className="wheel-container">
          <Wheel letters={this.state.items} active={this.letters[this.state.activeIndex]}/>        
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
