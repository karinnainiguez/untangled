import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ResultSummary extends Component {

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string,
		paths: PropTypes.array
	}


	render(){
		let show;
		if (this.props.paths) {
			show = <h3>We Found {this.props.paths.length} paths from {this.props.startPage} to {this.props.endPage}</h3>
		}

		return (
			<div>
				{show}
			</div>
		);
	}
}

export default ResultSummary;
