import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';

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
				<h4>Welcome to UnTangled!</h4>
        <p>
					Enter your starting Wiki page and
					ending Wiki page.  Our spidey sense
					will determine the shortest path
					between them.  Try to achieve it
					yourself, or give up to our awesome
					power and display the best paths!
				</p>
				<SearchForm updatePagesCallback={this.updatePages} className={this.state.search}/>
      </div>
    );
  }
}

export default App;
