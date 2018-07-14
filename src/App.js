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
			results: "inactive",
			starting: "",
			ending: ""
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

		let showing = null;
		if (this.state.search === "active") {
			showing = <div>
				<Intro className={this.state.search}/>
				<SearchForm updatePagesCallback={this.updatePages} className={this.state.search}/>
			</div>;
		} else {
			showing = <Results className={this.state.results} startPage={this.state.starting} endPage={this.state.ending}/>
		}

		return (
			<div className="App">
				<AppHeader />
				{showing}
			</div>
		);
	}
}

export default App;
