import React, { Component } from 'react'
import './header.scss';
import { TextField } from '@material-ui/core';

class Header extends Component {
  handleChange = (event) => {
    this.props.onTeamsChange(event.target.value);
  }

  render() {
    return (
    <header>
      <div className="heading">
        <h1>{this.props.label}</h1>
      </div>
      <div className="options">
         <TextField type="number" label="Teams (1 to 4)" value={this.props.totalTeams} onChange={this.handleChange} name="teams" id="teams" min="1" max="4" step="1"/>
      </div>
    </header>
    );
  }
}

export default Header;

