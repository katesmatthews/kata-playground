import React, { Component } from 'react';
import './App.css';
import SimpleMap from './GoogleMap.js'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

class App extends Component {
  state = { passwords: [] } // Initialize state

  componentDidMount() {
    this.getPasswords(); // Fetch passwords after first mount
  }

  getPasswords = () => {
    fetch('/api/passwords') // Get the passwords and store them in state
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: purple,
        secondary: {
          main: '#f44336',
        },
      },
    });


    return (
      <div className="App">
        {/* SIMPLE MAP */}
        <SimpleMap />

        {/* THEME? */}
        {theme}

        {/* PASSWORD GENERATOR */} {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
            // Render a helpful message otherwise
            <div>
              <h1>No passwords :(</h1>
              <Button
                variant="contained"
                color="primary"
                onClick={this.getPasswords}>
                Try Again?
            </Button>
            </div>
          )}
      </div>
    );
  }
}

export default App;
