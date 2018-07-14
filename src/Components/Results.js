import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {

	static propTypes = {
		updatePagesCallback: PropTypes.func.isRequired,
		className: PropTypes.string
	}


	render(){
		return (
			<h2> These are results!</h2>
		);
	}
}

export default Results;
