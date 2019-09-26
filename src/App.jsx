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
      totalTeams: 1,
      teams: [{name: "Team 1", correct: 0, wrong: 0}],
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

  render() {
    const tabs = this.state.teams.map((team) => 
      <Tab key={team.name} team={team.name} onHandleClick={this.handleTabChange}/>
    );
    const content = this.state.teams.map((team) => 
      <Game team={team.name} key={team.name} className={(team.name !== this.state.selectedTeam) ? "hidden" : "" }/>
    );
    return (
      <div className="App">
        <Header label="It's game time" teams={this.state.teams} totalTeams={this.state.totalTeams} onTeamsChange={this.handleTeamsChange}/>
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
