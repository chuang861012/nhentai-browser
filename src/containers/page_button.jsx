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

    render() {
        const query = this.props.query ? `/query/${this.props.query}` : "";
        return (
            <div className="btn-group-wrap">
                <div className="btn-group">
                    <button className="btn btn-arrow" disabled={this.props.current_page == 1}><Link to={`${query}/1`}>&laquo;</Link></button>
                    <button className="btn btn-arrow" disabled={this.props.current_page - 1 < 1}><Link to={`${query}/${parseInt(this.props.current_page) - 1}`}>&lsaquo;</Link></button>
                    <input type="button" className="btn" value={this.props.current_page} />
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