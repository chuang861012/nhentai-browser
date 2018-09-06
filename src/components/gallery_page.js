import React, { Component } from 'react';

import GalleryDetail from "../containers/gallery_page/gallery_detail";
import GalleryImages from "../containers/gallery_page/gallery_images";
import {Link} from "react-router-dom";

export default class GalleryPage extends Component {
    
    componentWillMount(){
      try{
        const backpath = this.props.location.state.backpath;
        this.setState({backpath});
      }catch(e){
        this.setState({backpath:"/"});
      }
    }
    
    render() {
      return (
        <div className="items-container">
          <Link to={this.state.backpath}><button className="Back-btn">&larr;</button></Link>
          <GalleryDetail id={this.props.match.params.id}/>
          <GalleryImages backpath={this.state.backpath}/>
        </div>
      );
    }
  }
  