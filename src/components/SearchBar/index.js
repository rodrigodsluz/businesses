import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/* import React, { useState } from "react";
import logo from "../../images/logo/logo.png";

const SearchBar = () => {
  const [pictureName, setPictureName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    //do something

    return (
      <div className="logo">
        eae
        <img src={require(logo)} alt="" />
      </div>
    );
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={pictureName}
            onChange={(e) => setPictureName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
 */
