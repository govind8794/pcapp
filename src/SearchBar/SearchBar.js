import React from "react";

class SearchBar extends React.Component {
  state = { inputText: "" };
  onFormSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputText);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmitHandler}>
          <div className="field">
            <label>Image Search </label>
            <input
              fluid
              icon="search"
              placeholder="Search..."
              type="text"
              value={this.state.inputText}
              onChange={(e) => this.setState({ inputText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
