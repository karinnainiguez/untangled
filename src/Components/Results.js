import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Results.css';
import ResultSummary from './ResultSummary';
import ResultTry from './ResultTry';
import ResultPaths from './ResultPaths';

class Results extends Component {

	constructor(){
		super();

		this.state = {
			show: ""
		}
	}

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string,
		className: PropTypes.string,
		showSearchCallback: PropTypes.func.isRequired,
		updateStatusCallback: PropTypes.func.isRequired
	}

	componentDidMount(){

		if (this.props.startPage.length > 1 && this.props.endPage.length > 1 ) {

			this.props.updateStatusCallback("Untangling this mess.....", "success");
			axios.get(`http://localhost:8080/findPaths/${this.props.startPage}/${this.props.endPage}`)
			.then((response) => {
				this.setState({ results: response.data });
				this.props.updateStatusCallback("", "");
			})
			.catch((error) => {
				this.props.updateStatusCallback("Sorry, we couldn't Find any Paths :(", "error");
				console.log(error.message);
			});

		}

	}

	showTry = () => {
		this.setState({ show: "try" });
		this.props.updateStatusCallback("", "");
	}

	showPaths = () => {
		this.setState({ show: "paths" });
		this.props.updateStatusCallback("", "");
	}


	render(){
		let show;
		switch(this.state.show) {
			case "try":
			show = <ResultTry startPage={this.props.startPage} endPage={this.props.endPage} />
			break;
			case "paths":
			show = <ResultPaths data={this.state.results} />
			break;
			default:
		}

		return (
			<div className="results">
				<ResultSummary startPage={this.props.startPage} endPage={this.props.endPage} paths={this.state.results}/>
				<div className="nav">
					<button className="button" onClick={this.props.showSearchCallback}>Start Over</button>
					<button className="button" onClick={this.showTry}>Let Me Try!</button>
					<button className="button" onClick={this.showPaths}>Optimal Paths</button>
				</div>
				<div className="main">{show}</div>
			</div>
		);
	}
}

export default Results;
