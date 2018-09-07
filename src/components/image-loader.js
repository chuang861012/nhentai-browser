import React from 'react';
import ImageLoader from 'react-load-image';
import loader_image from "../img/loader.gif";

export default (props)=>{
    return (
        <ImageLoader src={props.src} className="img-loader-container">
            <img className={props.className}/>
            <div className="img-loader-error">Error</div>
            <img src={loader_image} className="img-loader-loader"/>
        </ImageLoader>
    );
};