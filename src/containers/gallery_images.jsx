import React, { Component } from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ImageLoader from "../components/image-loader";

class GalleryImages extends Component {
    constructor(props) {
        super(props);

        this.renderImages = this.renderImages.bind(this);
    }

    //render each image , use lazyload and set Link to the page reader for each page
    renderImages(image, index) {
        const image_type = { j: "jpg", p: "png" };
        const this_type = image.t;
        return (
            <div className="img-box" key={index} >
                <Link to={{ pathname: `/g/${this.props.id}/${index + 1}`, state: { media_id: this.props.media_id, images: this.props.images, backpath: this.props.backpath } }} >
                    <LazyLoad height="100%" once >
                        <ImageLoader src={`https://t.nhentai.net/galleries/${this.props.media_id}/${index + 1}t.${image_type[this_type]}`} />
                    </LazyLoad>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className="img-container">
                {this.props.images.map(this.renderImages)}
            </div>
        );
    }
}

function mapStateToProps({ book }) {
    if (!book.images) {
        return { images: [] };
    }
    const images = book.images.pages || [];
    const id = book.id;
    return { images, media_id: book.media_id, id: id.toString() };
}

GalleryImages.propTypes = {
    id: PropTypes.string,
    media_id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
    backpath: PropTypes.string
};

export default connect(mapStateToProps)(GalleryImages);