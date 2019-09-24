import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Footer from './components/footer';
import Game from './components/game';
import Header from './components/header';

function App() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <div className="App">
      <Header label="It's game time"/>
      <Game letters={letters}/>
      <Footer/>
    </div>
  );
}

export default App;
