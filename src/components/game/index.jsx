import React, { Component } from 'react';
import Wheel from '../wheel';
import Timer from '../timer';
import Control from '../control';
import './game.scss';

class Game extends Component {
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  initialList;
  constructor(props) {
    super(props);
    this.initialList = this.letters.map((letter) => ({label: letter, state: 'initial'}));
    this.state = {
      running: false,
      activeIndex: 0,
      items: this.initialList,
      hasTime: true
    };
  }

  initWheel = () => {
    this.setState({
      running: false,
      activeIndex: 0,
      items: this.initialList
    });
    this.props.onHandleReset(this.props.team);
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

  findByLetterFrom = (items, letter, index) => {
    let nextIndex = -1;
    for(var i = index; i < items.length; i++) {
      if(items[i].label === letter) {
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
    this.props.onHandleCorrect(this.props.team);
    this.goToNext();
  }

  handleWrong = () => {
    this.updateCurrentItemState('wrong');
    this.props.onHandleWrong(this.props.team);
    this.goToNext();
    this.setState({
      running: false
    });
  }

  handleUndo = (letter) => {
    const index = this.findByLetterFrom(this.state.items, letter, 0);
    const newItems = [...this.state.items];
    if (newItems[index].state === 'correct') {
      this.props.onHandleUndoCorrect(this.props.team);
    } else if (newItems[index].state === 'wrong') {
      this.props.onHandleUndoWrong(this.props.team);
    }
    const item = {
      ...newItems[index],
      state: 'initial'
    }
    newItems[index] = item;
    this.setState({
      running: false,
      activeIndex: index,
      items: newItems
    });
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

  handleHasTimeChange = (hasTime) => {
    this.setState({
      hasTime: hasTime
    });
  }

  render() {
    return (
      <main className={"container " + this.props.className}>
        <div className="wheel-container">
          <Wheel letters={this.state.items} handleClick={this.handleUndo} active={this.letters[this.state.activeIndex]}/>        
        </div>
        <div className="game-pad">
          <Control running={this.state.running} onPlayStopChange={this.handlePlayStopChange} onReset={this.initWheel}
           onSkip={this.handleSkip} onCorrect={this.handleCorrect} onWrong={this.handleWrong} hasTime={this.state.hasTime}/>
          <Timer running={this.state.running} onHasTimeChange={this.handleHasTimeChange} hasTime={this.state.hasTime}/>
        </div>
      </main>
    );
  }
}

export default Game;
