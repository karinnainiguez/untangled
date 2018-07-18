import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import Intro from './Components/Intro';
import AppHeader from './Components/AppHeader';
import Results from './Components/Results'
import Status from './Components/Status'

class App extends Component {

	constructor(){
		super();
		this.state = {
			search: "active",
			results: "inactive",
			starting: "",
			ending: "",
			status: {}
		}
	}

	updateStatus = (message, type) => {
		this.setState({
			status: {
				message: message,
				type: type
			}
		})
	}

	showResults = (updatedState) => {
		this.setState(updatedState);
		this.setState({
			results: "active",
			search: "inactive"
		});
	}

	showSearch = () => {
		this.setState({
			search: "active",
			results: "inactive",
			starting: "",
			ending: ""
		});
	}

	render() {

		let showing = null;
		if (this.state.search === "active") {
			showing =
				<div>
					<Intro
						className={this.state.search}
						/>
					<SearchForm
						updateStatusCallback={this.updateStatus}
						showResultsCallback={this.showResults}
						className={this.state.search}
						/>
				</div>;
		} else {
			showing =
			<Results
				showSearchCallback={this.showSearch}
				className={this.state.results}
				startPage={this.state.starting}
				endPage={this.state.ending}
				/>;
		}

		return (
			<div className="App">
				<AppHeader />
				<Status
					message={this.state.status.message}
					type={this.state.status.type}
					/>
				{showing}
			</div>
		);
	}
}

export default App;
