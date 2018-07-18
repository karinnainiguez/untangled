import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Results.css';

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
			axios.get(`https://api-untangled.herokuapp.com/paths/${this.props.startPage}/${this.props.endPage}`)
			.then((response) => {
				this.props.updateStatusCallback("We Found Some Paths!", "success");
				console.log(response.data);
			})
			.catch((error) => {
				this.props.updateStatusCallback("Sorry, we couldn't Find any Paths :(", "error");
				console.log(error.message);
			});

		}

	}

	showTry = () => {
		this.setState({ show: "try" })
	}

	showPaths = () => {
		this.setState({ show: "paths" })
	}


	render(){
		let show;
		switch(this.state.show) {
			case "try":
			show = "THIS IS THE TRYING PAGE"
			break;
			case "paths":
			show = "THIS IS THE PATH PAGE"
			break;
			default:
			show = "NOTHING SHOWING"
		}

		return (
			<div className="results">
				<div className="summary"></div>
				<div className="nav">
					<button className="button" onClick={this.props.showSearchCallback}>Start Over</button>
					<button className="button" onClick={this.showTry}>Let Me Try!</button>
					<button className="button" onClick={this.showPaths}>Show Me Possible Paths</button>
				</div>
				<div className="main">{show}</div>
			</div>
		);
	}
}

export default Results;
