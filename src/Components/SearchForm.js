import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

	constructor() {
		super();

		this.state = {
			starting: "",
			ending: ""
		}
	}

	onInputChange = (event) => {
		let updatedState = {};

		let name = event.target.name;
		updatedState[name] = event.target.value;

		this.setState( updatedState );
	}

	onFormSubmit = (event) => {
		event.preventDefault();
	}

	render(){
		return (
			<form className="search-form" onSubmit={this.onFormSubmit}>
				<div>
					<input
						value={this.state.starting}
						onChange={this.onInputChange}
						type="text"
						name="starting"
						placeholder="Start"
						className="search-input"
						/>
					<input
						value={this.state.ending}
						onChange={this.onInputChange}
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
