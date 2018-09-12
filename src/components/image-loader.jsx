import React from "react";
import Image_Loader from "react-load-image";
import loader_image from "../img/loader.svg";
import PropTypes from "prop-types";

export const ImageLoader = (props) => { // eslint-disable-line arrow-body-style
    return (
        <Image_Loader src={props.src} className="img-loader-container" onLoad={props.onLoad}>
            <img className={props.className} />
            <div className="img-loader-error">Error</div>
            <img src={loader_image} className="img-loader-loader" />
        </Image_Loader>
    );
};

ImageLoader.propTypes = {
    src: PropTypes.string,
    onLoad: PropTypes.func,
    className: PropTypes.string
};