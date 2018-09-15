import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchNhentai } from "../actions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ButtonGroup extends Component {
    constructor(props) {
        super(props);

        this.onClickPrev = this.onClickPrev.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickLast = this.onClickLast.bind(this);
        this.renderPageButtons = this.renderPageButtons.bind(this);
        this.renderFirstPageButton = this.renderFirstPageButton.bind(this);
        this.renderLastPageButton = this.renderLastPageButton.bind(this);
    }

    onClickPrev() {
        const page = this.props.current_page;
        if (page - 1 < 1) {
            return;
        }
        const url = this.props.url.replace(`&page=${page}`, "");
        this.props.searchNhentai(url, page - 1);
    }

    onClickNext() {
        const page = this.props.current_page;
        const max = this.props.max_page;
        if (page + 1 > max) {
            return;
        }
        const url = this.props.url.replace(`&page=${page}`, "");
        this.props.searchNhentai(url, page + 1);
    }


    onClickLast() {
        const page = this.props.current_page;
        const max = this.props.max_page;
        const url = this.props.url.replace(`&page=${page}`, "");
        this.props.searchNhentai(url, max);
    }

    computePageButtons(page,max){
        const base = page <= 3 ? 1 : page-2;
        const page_array = [base];
        for(let i = base+1;i <= max && page_array.length < 5;i++){
            page_array.push(i);
        }
        if(page_array.length<5){
            for(let i = base-1; i > 0 && page_array.length < 5;i--){
                page_array.push(i);
            }
        }
        return page_array.sort((a,b)=>a-b);
    }

    renderPageButtons(page){
        const query = this.props.query ? `/query/${this.props.query}` : "";
        if(page.toString() === this.props.current_page){
            return <Link to={`${query}/${page}`} key={page}><input type="button" className="btn btn-current" value={page} /></Link>;
        }
        return <Link to={`${query}/${page}`} key={page}><input type="button" className="btn" value={page} /></Link>;
    }

    renderFirstPageButton(query,page){
        if(page<4){
            return <noscript />;
        }
        return (
            <span>
                <Link to={`${query}/1`}><input type="button" className="btn" value={1} /></Link>
                <button className="btn" style={{cursor:"default"}}>&hellip;</button>
            </span>
        );
    }

    renderLastPageButton(query,page){
        if(page>this.props.max_page-3){
            return <noscript />
        }
        return (
            <span>
                <button className="btn" style={{cursor:"default"}}>&hellip;</button>
                <Link to={`${query}/${this.props.max_page}`}><input type="button" className="btn" value={this.props.max_page} /></Link>;
            </span>
        );
    }


    render() {
        const query = this.props.query ? `/query/${this.props.query}` : "";
        return (
            <div className="btn-group-wrap">
                <div className="btn-group">
                    <button className="btn btn-arrow" disabled={this.props.current_page == 1}><Link to={`${query}/1`}>&laquo;</Link></button>
                    <button className="btn btn-arrow" disabled={this.props.current_page - 1 < 1}><Link to={`${query}/${parseInt(this.props.current_page) - 1}`}>&lsaquo;</Link></button>
                    {this.renderFirstPageButton(query,this.props.current_page)}
                    {this.computePageButtons(this.props.current_page,this.props.max_page).map(this.renderPageButtons)}
                    {this.renderLastPageButton(query,this.props.current_page)}
                    <button className="btn btn-arrow" disabled={this.props.current_page + 1 > this.props.max_page}><Link to={`${query}/${parseInt(this.props.current_page) + 1}`}>&rsaquo;</Link></button>
                    <button className="btn btn-arrow" disabled={this.props.current_page == this.props.max_page}><Link to={`${query}/${this.props.max_page}`}>&raquo;</Link></button>
                </div>
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

ButtonGroup.propTypes = {
    current_page: PropTypes.string,
    url: PropTypes.string,
    searchNhentai: PropTypes.func,
    max_page: PropTypes.string,
    query: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);