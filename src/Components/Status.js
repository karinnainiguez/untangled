import React from 'react';
import PropTypes from 'prop-types';

const Status = (props) => {
	return(
		<div className={`status ${props.type}`} >
			<h3>{props.message}</h3>
		</div>
	);
}

Status.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}

export default Status;
