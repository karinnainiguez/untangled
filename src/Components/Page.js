import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
	return(
		<h4>{props.title}</h4>
	);
}

Page.propTypes = {
	title: PropTypes.string.isRequired
}

export default Page;
