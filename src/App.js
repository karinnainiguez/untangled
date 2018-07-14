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
			search: "active",
			results: "inactive"
		}
	}

	updatePages = (updatedState) => {
		this.setState(updatedState);
		this.setState({
			results: "active",
			search: "inactive"
		});
	}

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Intro className={this.state.search}/>
				<SearchForm updatePagesCallback={this.updatePages} className={this.state.search}/>
				<Results className={this.state.results}/>
      </div>
    );
  }
}

export default App;
