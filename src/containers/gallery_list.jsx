import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonGroup from "./page_button";
import { searchNhentai } from "../actions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import _ from "lodash";

import { PageLoader } from "../components/page_loader";
import { ImageLoader } from "../components/image-loader";

class GalleryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: props.match.params.query,
            current_page: props.match.params.page,
            data: props.data
        };

        // fetch the data while user enter
        // search the query or the all page
        let url;
        if (_.get(props,"match.params.query",null)) {
            url = `/api/search?query=${props.match.params.query}`;
        }
        else {
            url = `/api/search?`;
        }
        // specify the page at
        const page = props.match.params.page || 1;
        props.searchNhentai(url, page);

        this.renderGallery = this.renderGallery.bind(this);
        this.computePath = this.computePath.bind(this);
    }

    static getDerivedStateFromProps(nextProps, state) {
        if (!(state.query === nextProps.match.params.query && state.current_page === nextProps.match.params.page)) {
            let url;
            if (_.get(nextProps,"match.params.query",null)) {
                url = `/api/search?query=${nextProps.match.params.query}`;
            }
            else {
                url = `/api/search?`;
            }
            const page = nextProps.match.params.page || 1;
            nextProps.searchNhentai(url, page);
            return {
                data: null,
                query: nextProps.match.params.query,
                current_page: nextProps.match.params.page,
            };
        }
        // state setting while receive props from actions
        return {
            data: nextProps.data,
            query: nextProps.match.params.query,
            current_page: nextProps.match.params.page,
        };
    }

    computePath() {
        const query = this.props.match.params.query;
        const page = this.props.current_page;
        if (query) {
            return `/query/${query}/${page}`;
        } else {
            return `/${page}`;
        }
    }

    renderGallery(galleryData) {
        const cover_type = { j: "jpg", p: "png", g: "gif" };
        const this_type = galleryData.images.thumbnail.t;
        return (
            <Link to={{ pathname: `/g/${galleryData.id}`, state: { backpath: this.computePath() } }} key={galleryData.id}>
                <div className="item">
                    <h1 className="item-title">{galleryData.title.english}</h1>
                    <ImageLoader src={`https://t.nhentai.net/galleries/${galleryData.media_id}/thumb.${cover_type[this_type]}`} className="item-img" />
                </div>
            </Link>
        );
    }

    render() {
        if (this.state.data === null || typeof this.state.data === "undefined") {
            return <PageLoader />;
        } else if (this.state.data.length <= 0) {
            return (
                <div>
                    <h1 className="loading">No Results</h1>
                </div>
            );
        }
        return (
            <div className="items-container">
                <ButtonGroup page={this.state.current_page} query={this.state.query} />
                <div className="items">
                    {this.state.data.map(this.renderGallery)}
                </div>
                <ButtonGroup page={this.state.current_page} query={this.state.query} />
            </div>
        );
    }
}

function mapStateToProps({ gallery }) {
    return gallery;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchNhentai }, dispatch);
}

GalleryList.propTypes = {
    match:PropTypes.shape({
        params:PropTypes.shape({
            query: PropTypes.string,
            page: PropTypes.string
        })
    }),
    current_page: PropTypes.string,
    data: PropTypes.array,
    searchNhentai: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList);