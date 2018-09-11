import React from "react";
import {shallow} from "enzyme";
import {ImageLoader} from "../image-loader";

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<ImageLoader src="localhost:5000" onLoad={()=>{}} className="img-loader-img"/>);
});

it("should contain source img",()=>{
    expect(wrapped.find(".img-loader-img").length).toEqual(1);
});

it("should contain error message",()=>{
    expect(wrapped.find(".img-loader-error").length).toEqual(1);
});

it("should contain loader",()=>{
    expect(wrapped.find(".img-loader-loader").length).toEqual(1);
});