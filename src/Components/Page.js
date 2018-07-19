import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
	let link = "https://en.wikipedia.org/wiki/";
	let title = props.title.replace(" ", "_")
	return(
		<h4>
			<a
				href={`${link}${title}`}
				className="page-link"
				target="_blank">
				{props.title}
			</a>
		</h4>
	);
}

Page.propTypes = {
	title: PropTypes.string.isRequired
}

export default Page;
