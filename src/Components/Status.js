import React from 'react';
import PropTypes from 'prop-types';
import './Status.css';

const Status = (props) => {
	return(
		<div className={`status ${props.type}`} >
			<h3>{props.message}</h3>
		</div>
	);
}

Status.propTypes = {
	message: PropTypes.string,
	type: PropTypes.string
}

export default Status;
