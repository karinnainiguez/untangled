import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import Intro from './Components/Intro';

class App extends Component {

	constructor(){
		super();
		this.state = {
			search: "inactive"
		}
	}

	updatePages = (updatedState) => {
		console.log("Updating Pages!");
		this.setState(updatedState);
		this.setState({search: "active"})
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Untangled - The WikiWeb Game</h1>
        </header>
        <Intro className={this.state.search}/>
				<SearchForm updatePagesCallback={this.updatePages} className={this.state.search}/>
      </div>
    );
  }
}

export default App;
