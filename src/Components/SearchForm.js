import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  render(){
    return (
      <form className="search-form">
				<input
					type="text"
					name="starting"
					placeholder="Enter Starting Wiki Page"
					className="search-input"
					/>
				<input
					type="text"
					name="ending"
					placeholder="Enter Ending Wiki Page"
					className="search-input"
					/>
				<input
					type="submit"
					value="Find Connections"
					className="button"
					/>
			</form>
    );
  }
}

export default SearchForm;
