import React, {Component} from "react";

import GalleryDetail from "../containers/gallery_detail";
import GalleryImages from "../containers/gallery_images";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default class GalleryPage extends Component {
    constructor(props){
        super(props);
        // if contains a back path , set it
        // if no back path , set it back to root path "/"
        try {
            const backpath = props.location.state.backpath;
            this.state = {
                backpath
            };
        } catch (e) {
            this.state = {
                backpath: "/"
            };
        }
    }

    render() {
        return (
            <div className="items-container">
                <Link to={this.state.backpath}><button className="Back-btn">&larr;</button></Link>
                <GalleryDetail id={this.props.match.params.id}/>
                <GalleryImages backpath={this.state.backpath}/>
            </div>
        );
    }
}

GalleryPage.propTypes = {
    location:PropTypes.shape({
        state:PropTypes.shape({
            backpath:PropTypes.string
        })
    }),
    match:PropTypes.shape({
        params:PropTypes.shape({
            id:PropTypes.string
        })
    })
};