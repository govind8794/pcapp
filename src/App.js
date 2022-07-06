import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Unsplash from "./api/Unsplash";
import { ImageList } from "./ImageList/ImageList";

export class App extends React.Component {
  state = {Images: [] }
   onSearchHandler = async e => {
    const response = await Unsplash.get("search/photos", { params: { query: e }});
   this.setState({Images : response.data.results})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchHandler} />
        <ImageList images = {this.state.Images} />
      </div>
    );
  }
}

