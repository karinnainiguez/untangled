import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	render(){
		return (
			<form className="search-form">
				<div>
					<input
						type="text"
						name="starting"
						placeholder="Start"
						className="search-input"
						/>
					<input
						type="text"
						name="ending"
						placeholder="End"
						className="search-input"
						/>
				</div>
				<input
					type="submit"
					value="FIND MY PATH!"
					className="button"
					/>
			</form>
		);
	}
}

export default SearchForm;
