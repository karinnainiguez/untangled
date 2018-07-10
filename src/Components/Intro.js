import React from 'react';
import PropTypes from 'prop-types';

const Intro = (props) => {
	return(
		<div className={props.className} >
			<h4>Welcome to UnTangled!</h4>
			<p>
				Enter your starting Wiki page and
				ending Wiki page.  Our spidey sense
				will determine the shortest path
				between them.  Try to achieve it
				yourself, or give up to our awesome
				power and display the best paths!
			</p>
		</div>
	);
}

Intro.propTypes = {
	className: PropTypes.string.isRequired
}

export default Intro;
