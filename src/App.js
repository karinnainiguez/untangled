import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import Intro from './Components/Intro';
import AppHeader from './Components/AppHeader';
import Results from './Components/Results'

class App extends Component {

	constructor(){
		super();
		this.state = {
			results: "inactive"
		}
	}

	updatePages = (updatedState) => {
		this.setState(updatedState);
		this.setState({results: "active"});
	}

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Intro className={this.state.results}/>
				<SearchForm updatePagesCallback={this.updatePages} className={this.state.results}/>
				<Results />
      </div>
    );
  }
}

export default App;
