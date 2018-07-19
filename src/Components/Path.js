import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from './Page';


class Path extends Component {

	static propTypes = {
		list: PropTypes.array
	}


	render(){
		let pages = this.props.list.map((page, index) =>{
			return(
				<React.Fragment key={index}>
				<li><Page title={page}/></li>
				<li>&darr;</li>
				</React.Fragment>
			);
		});

		return (
			<ul className="path">
				{pages}
			</ul>
		)
	}
}

export default Path;
