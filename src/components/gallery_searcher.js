import React, {Component} from "react";
import GalleryList from "../containers/gallery_list";
import PropTypes from "prop-types";

export default class GallerySearcher extends Component {
    render() {
        // pass the params query and page to component
        return  <GalleryList query={this.props.match.params.query} page={this.props.match.params.page}/>;
    }
}

GallerySearcher.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            query: PropTypes.string,
            page: PropTypes.string
        })
    })
};