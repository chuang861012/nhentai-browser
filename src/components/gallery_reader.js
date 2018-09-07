import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {getBookById} from "../actions/index";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import ImageLoader from "../components/image-loader";

class GalleryReader extends Component{
    constructor(props){
        super(props);

        this.computeImageUrl = this.computeImageUrl.bind(this);
        this.computePageLink = this.computePageLink.bind(this);
    }

    componentWillMount(){
        if(!this.props.location.state){
            this.props.getBookById(this.props.match.params.id);
        } else{
            this.setState({
                images:this.props.location.state.images,
                page:this.props.match.params.page,
                media_id:this.props.location.state.media_id
            });
        }
        try{
            const backpath = this.props.location.state.backpath;
            this.setState({backpath});
        }catch(e){
            this.setState({backpath:"/"});
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            images:nextProps.images,
            page:nextProps.match.params.page,
            media_id:nextProps.media_id
        });
    }

    computeImageUrl(){
        const page = this.state.page;
        const image_type = {j:"jpg",p:"png",g:"gif"};
        const this_type = this.state.images[page-1].t;

        return `https://i.nhentai.net/galleries/${this.state.media_id}/${this.state.page}.${image_type[this_type]}`;
    }

    computePageLink(page){
        const gallery_length = this.state.images.length;
        if(page<1 || page>gallery_length){
            return `/g/${this.props.id}`;
        }else{
            return `/g/${this.props.id}/${page}`;
        }
    }

    render(){
        if(!this.state.images){
            return (
                <p>
                    Loading...
                </p>
            );
        }
        return (
            <div>
                <Link to={{pathname:`/g/${this.props.id}`,state:{backpath:this.state.backpath}}}>
                    <button className="Back-btn">&larr;</button>
                </Link>
                <p className="reader-img-counter">{this.state.page} / {this.state.images.length}</p>
                <div className="reader-img-container">
                    <Link to={{pathname:this.computePageLink(parseInt(this.state.page)-1),backpath:this.state.backpath}}>
                        <div className="reader-img-left" />
                    </Link>
                    <Link to={{pathname:this.computePageLink(parseInt(this.state.page)+1),backpath:this.state.backpath}}>
                        <div className="reader-img-right" />
                    </Link>
                    <ImageLoader src={this.computeImageUrl()}/>
                </div>
                <p className="reader-img-counter">{this.state.page} / {this.state.images.length}</p>
            </div>
        );
    }
}

function mapStateToProps({book}){
    if(!book.images){
        return {images:[]};
    }
    const images = book.images.pages || [];
    return {images,media_id:book.media_id,id:book.id};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBookById},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryReader);