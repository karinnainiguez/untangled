import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultTry extends Component {

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string
	}

	render(){
		let formatStart = `https://en.m.wikipedia.org/wiki/${this.props.startPage.replace(' ', '_')}`;
		let formatEnd = `https://en.m.wikipedia.org/wiki/${this.props.endPage.replace(' ', '_')}`;
		return (
			<div className="try-section">
				<iframe
					title={this.props.startPage}
					src={formatStart}
					className="try-child"
					/>
				<iframe
					title={this.props.endPage}
					src={formatEnd}
					className="try-child"
					/>
			</div>
		);
	}
}

export default ResultTry;
