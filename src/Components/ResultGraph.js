import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Graph } from 'react-d3-graph';

class ResultGraph extends Component {
	static propTypes = {
		data: PropTypes.array
	}

	render() {
		const nodeArray = []; const linkArray = []; const addedNodes = [];
		const wholeData = this.props.data;

		for (let i = 0 ; i < wholeData.length ; i += 1 ) {

			for(let j = 0; j < wholeData[i]["nodes(path)"].length ; j += 1 ){
				let node = wholeData[i]["nodes(path)"][j]["title"];
				if ( !addedNodes.includes(node) ) {
					nodeArray.push( {'id': node} );
					addedNodes.push(node);
				}
			}

			for (let k = 0; k < (wholeData[i]['nodes(path)'].length - 1) ; k += 1 ) {
				linkArray.push({
					"source": wholeData[i]['nodes(path)'][k]['title'],
					"target": wholeData[i]['nodes(path)'][k + 1]['title']
				});
			}

		}

		const data = {
			nodes: nodeArray,
			links: linkArray
		}

		const myConfig = {
			height: 200,
			nodeHighlightBehavior: true,
			node: {
				color: 'black',
				size: 200,
				fontSize: 15,
				fontColor: 'black',
				highlightStrokeColor: '#d5a6bd',
				highlightFontSize: 15,
				highlightFontWeight: 'bold'
			},
			link: {
				highlightColor: '#d5a6bd'
			}
		}

		return (

			<div className="graph-container">
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
