import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Results.css';

class Results extends Component {

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string,
		className: PropTypes.string
	}


	render(){
		return (
			<h2 className={this.props.className}> These are results!</h2>
		);
	}
}

export default Results;
