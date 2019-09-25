import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Footer from './components/footer';
import Game from './components/game';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header label="It's game time"/>
      <Game team="Team 1"/>
      <Footer/>
    </div>
  );
}

export default App;
