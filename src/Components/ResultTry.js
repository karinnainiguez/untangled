import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultTry extends Component {

	static propTypes = {
		data: PropTypes.object
	}



	render(){
		return (<div className="try-section">
			<iframe
				src="https://en.m.wikipedia.org/wiki/Ada_Developers_Academy"
				className="try-child"
				/>
			<iframe
				src="https://en.m.wikipedia.org/wiki/Java_(programming_language)"
				className="try-child"
				/>
		</div>);
	}
}

export default ResultTry;
