import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Path from './Path';


class ResultPaths extends Component {

	static propTypes = {
		data: PropTypes.array
	}


	render(){
		let paths = this.props.data.map((path, index) =>{
			return(
				<Path key={index} list={path["nodes(path)"]} />
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
