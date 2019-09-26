
import React, { Component } from 'react'

class Header extends Component {
  handleChange = (event) => {
    this.props.onTeamsChange(event.target.value);
  }

  render() {
    const teams = this.props.teams;
    const scores = teams.map((team) =>
      <div className="result-line"><span className="team-name">{team.name}</span> | <span className="score-correct">{team.correct}</span> | <span className="score-wrong">{team.wrong}</span></div>
    );
    return (
    <header>
      <div className="heading">
        <h1>{this.props.label}</h1>
      </div>
      <div className="options">
        <input type="number" value={this.props.totalTeams} onChange={this.handleChange} name="teams" id="teams" min="1" max="4" step="1"/>
      </div>
      <div className="score">
        {scores}
      </div>
    </header>
    );
  }
}

export default Header;

