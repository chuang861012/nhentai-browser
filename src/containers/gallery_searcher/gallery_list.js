import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ButtonGroup from "./page_button";
import {searchNhentai} from "../../actions";
import {Link} from "react-router-dom";
import {API_URL} from "../../data.js";

class GalleryList extends Component{
    constructor(props){
        super(props);

        this.renderGallery = this.renderGallery.bind(this);
        this.computePath = this.computePath.bind(this);
    }

    componentWillMount(){
        let url;
        if(this.props.query && this.props.query!==""){
            url = `${API_URL}/search?query=${this.props.query}`;
        }
        else{
            url = `${API_URL}/search?`;
        }
        const page = this.props.page || 1; 
        this.props.searchNhentai(url,page);
    }

    componentDidUpdate(prev){
        if(prev.query === this.props.query && prev.page===this.props.page){
            return false;
        }
        let url;
        if(this.props.query && this.props.query!==""){
            url = `${API_URL}/search?query=${this.props.query}`;
        }
        else{
            url = `${API_URL}/search?`;
        }
        const page = this.props.page || 1; 
        this.props.searchNhentai(url,page);
    }

    computePath(){
        const query = this.props.query;
        const page = this.props.current_page;
        if(query){
            return `/query/${query}/${page}`;
        }else{
            return `/${page}`;
        }
    }

    renderGallery(galleryData){
        const cover_type = {j:"jpg",p:"png",g:"gif"};
        const this_type = galleryData.images.cover.t;
        return (
            <Link to={{pathname:`/g/${galleryData.id}`,state:{backpath:this.computePath()}}} key={galleryData.id}>
                <div className="item">
                    <h1 className="item-title">{galleryData.title.english}</h1>
                    <img className="item-img" src={`https://t.nhentai.net/galleries/${galleryData.media_id}/cover.${cover_type[this_type]}`}/>
                </div>
            </Link>
        );
    }

    render(){
        if(this.props.data === null){
            return (
                <div>
                    <h1 className="loading">Loading...</h1>
                </div>
            );
        }else if(this.props.data.length <=0){
            return (
                <div>
                    <h1 className="loading">No Results</h1>
                </div>
            );
        }
        return (
            <div className="items-container">
                <ButtonGroup page={this.props.current_page} query={this.props.query}/>
                <div className="items">
                {this.props.data.map(this.renderGallery)}
                </div>
                <ButtonGroup page={this.props.current_page} query={this.props.query}/>
            </div>
        );
    }
}

function mapStateToProps({gallery}){
    return gallery;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchNhentai},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryList);