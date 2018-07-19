import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Path from './Path';


class ResultPaths extends Component {

	static propTypes = {
		data: PropTypes.object
	}


	render(){
		let paths = this.props.data.paths.map((path, index) =>{
			return(
				<Path key={index} list={path} />
			);
		});
		return (
			<div className="path-container">
				{paths}
			</div>
		)
	}
}

export default ResultPaths;
