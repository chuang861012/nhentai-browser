import React from "react";
import {shallow} from "enzyme";
import PageLoader from "../page_loader.js";
import Loader from "../../img/Interwind-1s-200px.svg";

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<PageLoader />);
});

it("should contains 1 <h1> and 1 <img>",()=>{
    expect(wrapped.find("h1").length).toEqual(1);
})

it("should has the correct image",()=>{
    expect(wrapped.find("img").prop("src")).toEqual(Loader);
});