import React from "react";
import {Link} from "react-router-dom";
import Logo from "../img/nb-icon.png";
import SearchBar from "../containers/search_bar";

export const NavBar = ()=>{ // eslint-disable-line arrow-body-style
    return (
        <div className="nav-container">
            <Link to="/" className="nav-item"><img src={Logo} className="nav-img"/></Link>
            <SearchBar />
        </div>
    );
};