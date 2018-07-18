import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Results.css';

class Results extends Component {

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
