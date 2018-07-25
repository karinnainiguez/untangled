import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
	const link = "https://en.wikipedia.org/wiki/";
	const title = props.title.replace(" ", "_");
	return(
		<h4>
			<a
				href={`${link}${title}`}
				className="page-link"
				target="_blank"
				>
				{props.title}
			</a>
		</h4>
	);
}

Page.propTypes = {
	title: PropTypes.string.isRequired
}

export default Page;
