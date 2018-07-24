import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

const Page = (props) => {
	let link = "https://en.wikipedia.org/wiki/";
	let title = props.title.replace(" ", "_")
	return(
		<h4>

			<Popup
				trigger={<a
					href={`${link}${title}`}
					className="page-link"
					target="_blank">
					{props.title}
				</a>}
				position="top center"
				on="hover"
				>
				<iframe
					title={title}
					src={`https://en.m.wikipedia.org/wiki/${title}`}
					width = "500px"
					height = "500px"
					/>
			</Popup>
		</h4>
	);
}

Page.propTypes = {
	title: PropTypes.string.isRequired
}

export default Page;
