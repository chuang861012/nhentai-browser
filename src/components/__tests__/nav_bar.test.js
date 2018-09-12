import React from "react";
import {shallow} from "enzyme";
import {NavBar} from "../nav_bar";
import {Link} from "react-router-dom";
import {SearchBar} from "../../containers/search_bar";
import Logo from "../../img/nb-icon.png";

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<NavBar src="localhost:5000" onLoad={()=>{}} className="img-loader-img"/>);
});

it("should contains a Link",()=>{
    expect(wrapped.find(Link).length).toEqual(1);
});

it("should contains SearchBar",()=>{
    expect(wrapped.find(SearchBar).length).toEqual(1);
});

it("should contains 1 image with correct image file",()=>{
    expect(wrapped.find("img").length).toEqual(1);
    expect(wrapped.find("img").first().prop("src")).toEqual(Logo);
});