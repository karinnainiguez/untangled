import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Results.css';

class Results extends Component {

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string,
		className: PropTypes.string
	}

	componentDidMount(){

		console.log(`The startPage: ${this.props.startPage}`);
		console.log(`The endPagee: ${this.props.endPage}`);


		if (this.props.startPage.length > 1 && this.props.endPage.length > 1 ) {
			console.log("Sending Axios call: ");
			axios.get(`http://localhost:8080/paths/${this.props.startPage}/${this.props.endPage}`)
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
			<h2 className={this.props.className}> These are results!</h2>
		);
	}
}

export default Results;
