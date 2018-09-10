import React, { Component } from 'react';
import GalleryList from "../containers/gallery_list";
import SeachBar from "../containers/search_bar";

export default class GallerySearcher extends Component {
  render() {
    // pass the params query and page to component
    return (
      <div>
        <SeachBar />
        <GalleryList query={this.props.match.params.query} page={this.props.match.params.page}/>
      </div>
    );
  }
}
