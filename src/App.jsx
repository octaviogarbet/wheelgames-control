import React, { Component } from 'react'
import './App.scss';
import Footer from './components/footer';
import Game from './components/game';
import Header from './components/header';
import Tab from './components/tab';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTeams: 2,
      teams: [{name: "Team 1", correct: 0, wrong: 0}, {name: "Team 2", correct: 0, wrong: 0}],
      selectedTeam: "Team 1"
    };
  }

  handleTeamsChange = (totalTeams) => {
    totalTeams = totalTeams > 4 ? 4 : Math.trunc(totalTeams);
    totalTeams = totalTeams < 1 ? 1 : totalTeams;
    const newTeams = [...this.state.teams];
    let currentTotalTeams = this.state.totalTeams;
    while (totalTeams > currentTotalTeams) {
      currentTotalTeams++;
      newTeams.push({name: 'Team '+currentTotalTeams, correct: 0, wrong: 0});
    }

    while (totalTeams < currentTotalTeams) {
      newTeams.pop();
      currentTotalTeams--;
    }
    this.setState({
      teams: newTeams,
      totalTeams: totalTeams
    });
  }

  handleTabChange = (teamName) => {
    this.setState({
      selectedTeam: teamName
    });
  }

  handleReset = (teamName) => {
    const newTeams = [...this.state.teams];
    const team = newTeams.find(t => t.name === teamName);
    team.correct = 0;
    team.wrong = 0;
    this.setState({
      teams: newTeams
    });
  }

  handleCorrect = (teamName) => {
    this.handleScore(teamName, true);
  }

  handleWrong = (teamName) => {
    this.handleScore(teamName, false);
  }

  handleScore = (teamName, addCorrect) => {
    const newTeams = [...this.state.teams];
    const team = newTeams.find(t => t.name === teamName);
    if (addCorrect) {
      team.correct++;
    } else {
      team.wrong++;
    }
    this.setState({
      teams: newTeams
    });
  }

  render() {
    const tabs = this.state.teams.map((team) => 
      <Tab key={team.name} team={team} onHandleClick={this.handleTabChange} className={(team.name === this.state.selectedTeam) ? "selected" : "" }/>
    );
    const content = this.state.teams.map((team) => 
      <Game team={team.name} key={team.name} className={(team.name !== this.state.selectedTeam) ? "hidden" : "" }
      onHandleCorrect={this.handleCorrect} onHandleWrong={this.handleWrong} onHandleReset={this.handleReset}/>
    );
    return (
      <div className="App">
        <Header label="Homemade Alphabetical" teams={this.state.teams} totalTeams={this.state.totalTeams} onTeamsChange={this.handleTeamsChange}/>
        <div className="tabs">
          {tabs}
        </div>
        <div className="content">
          {content}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
