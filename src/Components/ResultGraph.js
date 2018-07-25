import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Graph } from 'react-d3-graph';

class ResultGraph extends Component {

	static propTypes = {
		data: PropTypes.array
	}





	render(){

		const data = {
			nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
			links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
		}

		const myConfig = {
			nodeHighlightBehavior: true,
			node: {
				color: 'lightgreen',
				size: 120,
				highlightStrokeColor: 'blue'
			},
			link: {
				highlightColor: 'lightblue'
			}
		}

		return (
			<div>
				<h3> HELLO FROM RESULT GRAPH</h3>
				<Graph
					id="graph-id"
					data={data}
					config={myConfig}
					/>
			</div>
		);
	}
}

export default ResultGraph;
