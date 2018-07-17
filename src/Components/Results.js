import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Results.css';

class Results extends Component {

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string,
		className: PropTypes.string,
		showSearchCallback: PropTypes.func.isRequired
	}

	componentDidMount(){

		console.log(`The startPage: ${this.props.startPage}`);
		console.log(`The endPagee: ${this.props.endPage}`);


		if (this.props.startPage.length > 1 && this.props.endPage.length > 1 ) {
			console.log("Sending Axios call: ");
			axios.get(`https://api-untangled.herokuapp.com/paths/${this.props.startPage}/${this.props.endPage}`)
			.then((response) => {
				console.log("yay it went through");
				console.log(response.data);
			})
			.catch((error) => {
				console.log("Oh noooooooo :(");
				console.log(error);
			});
			console.log("DONE with Axios call");

		}

	}


	render(){
		return (
			<div>
				<h2 className={this.props.className}> These are results!</h2>
				<button className="button" onClick={this.props.showSearchCallback}>Start Over</button>
				<button className="button">Let Me Try!</button>
				<button className="button">Show Me Possible Paths</button>

			</div>
		);
	}
}

export default Results;
