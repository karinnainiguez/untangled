import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Graph } from 'react-d3-graph';

class ResultGraph extends Component {

	static propTypes = {
		startPage: PropTypes.string,
		endPage: PropTypes.string
	}



	render(){
		return (<div><h3> HELLO FROM RESULT GRAPH</h3></div>);
	}
}

export default ResultGraph;
