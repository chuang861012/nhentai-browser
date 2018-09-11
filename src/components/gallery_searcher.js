import React, {Component} from "react";
import GalleryList from "../containers/gallery_list";
import SeachBar from "../containers/search_bar";
import PropTypes from "prop-types";

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

GallerySearcher.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            query: PropTypes.string,
            page: PropTypes.string
        })
    })
};