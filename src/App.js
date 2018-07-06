import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Untangled</h1>
        </header>
        <p>Welcome.  Pick a starting and ending points from Wikipedia.</p>
				<SearchForm />
      </div>
    );
  }
}

export default App;
