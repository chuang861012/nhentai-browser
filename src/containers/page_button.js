import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {searchNhentai} from "../actions";
import {Link} from "react-router-dom";

class ButtonGroup extends Component{
    constructor(props){
        super(props);

        this.onClickPrev = this.onClickPrev.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickLast = this.onClickLast.bind(this);
    }

    onClickPrev(){
        const page = this.props.current_page;
        if(page-1<1){
            return;
        }
        const url = this.props.url.replace(`&page=${page}`,"");
        this.props.searchNhentai(url,page-1);
    }

    onClickNext(){
        const page = this.props.current_page;
        const max = this.props.max_page;
        if(page+1>max){
            return;
        }
        const url = this.props.url.replace(`&page=${page}`,"");
        this.props.searchNhentai(url,page+1);
    }


    onClickLast(){
        const page = this.props.current_page;
        const max = this.props.max_page;
        const url = this.props.url.replace(`&page=${page}`,"");
        this.props.searchNhentai(url,max);
    }

    render(){
        const query = this.props.query? `/query/${this.props.query}` : "";
        return (
            <div className="btn-group-wrap">
                <div className="btn-group">
                    <button className="btn" disabled={this.props.current_page==1}><Link to={`${query}/1`}>{"<<"}</Link></button>
                    <button className="btn" disabled={this.props.current_page-1<1}><Link to={`${query}/${parseInt(this.props.current_page)-1}`}>{"<"}</Link></button>
                    <input type="button" className="btn btn-secondary" value={this.props.current_page} />
                    <button className="btn" disabled={this.props.current_page+1 > this.props.max_page}><Link to={`${query}/${parseInt(this.props.current_page)+1}`}>{">"}</Link></button>
                    <button className="btn" disabled={this.props.current_page==this.props.max_page}><Link to={`${query}/${this.props.max_page}`}>{">>"}</Link></button>
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(ButtonGroup);