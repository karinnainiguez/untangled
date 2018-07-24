import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {

	static propTypes = {
		showResultsCallback: PropTypes.func.isRequired,
		updateStatusCallback: PropTypes.func.isRequired,
		className: PropTypes.string
	}

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

		let startPage = this.state.starting;
		let endPage = this.state.ending;

		if (startPage.length < 1 || endPage.length < 1) {
			this.props.updateStatusCallback("Please type in a starting and ending page to start", "error");
		} else {
			this.props.showResultsCallback(this.state);
		}
	}

	render(){
		return (
			<form
				onSubmit={this.onFormSubmit}
				className={this.props.className}
				>

				<div>
					<input
						value={this.state.starting}
						onChange={this.onInputChange}
						type="text"
						name="starting"
						placeholder="Starting Page"
						className="search-input"
						/>
					<input
						value={this.state.ending}
						onChange={this.onInputChange}
						type="text"
						name="ending"
						placeholder="Ending Page"
						className="search-input"
						/>
				</div>

				<input
					type="submit"
					value="UnTangle It!"
					className="button"
					/>

			</form>
		);
	}
}

export default SearchForm;
