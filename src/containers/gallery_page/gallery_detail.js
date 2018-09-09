import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getBookById} from "../../actions/index";

import ImageLoader from "../../components/image-loader";

class GalleryDetail extends Component{
    constructor(props){
        super(props);

        this.computeCoverUrl = this.computeCoverUrl.bind(this);
        this.renderTags = this.renderTags.bind(this);
    }

    componentWillMount(){
        // fetch data by id when user enter this page
        this.props.getBookById(this.props.id);
    }

    computeCoverUrl(){
        // make cover image scr url
        const cover_type = {j:"jpg",p:"png"};
        const this_type = this.props.book.images.cover.t;
        return `https://t.nhentai.net/galleries/${this.props.book.media_id}/cover.${cover_type[this_type]}`;
    }

    parseTagsContent(tag_entry){
        // make the details content (tags)
        const key = tag_entry[0];
        const tags = tag_entry[1];
        return (
            <div key={key}>
                <span className="book-tag-type">{key} : </span>
                {tags.map((tag,index)=>{
                    return <span className="book-tag-tag" key={index}>{tag.name}</span>
                })}
            </div>
        );
    }

    renderTags(tags){
        // change the tag array into useful object
        const tags_dict = {};
        tags.forEach(tag=>{
            if(!tags_dict[tag.type]){
                tags_dict[tag.type] = [tag];
            }else{
                tags_dict[tag.type] = [...tags_dict[tag.type],tag];
            }
        });
        return tags_dict;
    }

    render(){
        if(!this.props.book.images){
            return (<h1 className="loading">Loading...</h1>);
        }
        return (
            <div className="book-container">
                <div className="book-cover">
                    <ImageLoader src={this.computeCoverUrl()}/>
                </div>
                <div className="book-detail">
                    <h1>{this.props.book.title.english}</h1>
                    <h2>{this.props.book.title.japanese}</h2>
                    <div className="book-tags">{Object.entries(this.renderTags(this.props.book.tags)).map(this.parseTagsContent)}</div>
                    <div className="book-text">{this.props.book.num_pages} pages</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({book}){
    return {book};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBookById},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryDetail);