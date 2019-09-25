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

  findByStateFrom = (items, state, index) => {
    let nextIndex = -1;
    for(var i = index; i < items.length; i++) {
      if(items[i].state === state) {
        nextIndex = i;
        break;
      }
    }
    return nextIndex
  }

  goToNext = () => {
    let index = this.state.activeIndex + 1;
    let nextIndex = this.findByStateFrom(this.state.items, 'initial', index);
    if (nextIndex >= 0) {
      this.setState({activeIndex: nextIndex});
    } else {
      nextIndex = this.findByStateFrom(this.state.items, 'initial', 0);
      if (nextIndex >= 0) {
        this.setState({activeIndex: nextIndex});
      } 
    }
  }

  updateCurrentItemState = (state) => {
    const newItems = [...this.state.items];
    const item = {
      ...newItems[this.state.activeIndex],
      state: state
    }
    newItems[this.state.activeIndex] = item;
    this.setState({ items: newItems });
  }

  handleCorrect = () => {
    this.updateCurrentItemState('correct');
    this.goToNext();
  }

  handleWrong = () => {
    this.updateCurrentItemState('wrong');
    this.goToNext();
  }

  handleSkip = () => {
    this.goToNext();
    this.setState({
      running: false
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
          <Control running={this.state.running} onPlayStopChange={this.handlePlayStopChange}
           onSkip={this.handleSkip} onCorrect={this.handleCorrect} onWrong={this.handleWrong}/>
          <Timer running={this.state.running}/>
        </div>
      </main>
    );
  }
}

export default Game;
