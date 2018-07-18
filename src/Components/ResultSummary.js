import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ResultSummary extends Component {

	static propTypes = {
		data: PropTypes.object
	}


	render(){
		let show;
		if (this.props.data) {
			show = <h3>We Found {this.props.data.paths.length} paths from {this.props.data.from} to {this.props.data.to}</h3>
		}

		return (
			<div>
				{show}
			</div>
		);
	}
}

export default ResultSummary;
