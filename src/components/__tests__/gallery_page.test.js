import React from "react";
import {shallow} from "enzyme";
import GalleryPage from "../gallery_page";

import GalleryDetail from "../../containers/gallery_detail";
import GalleryImages from "../../containers/gallery_images";
import {Link} from "react-router-dom";

let wrapped;

beforeEach(()=>{
    const fakeParams = {params:{query:"Hello",id:"12345"}};
    const fakeLocation = {state:{backpath:"/1"}};
    wrapped = shallow(<GalleryPage match={fakeParams} location={fakeLocation}/>);
});

it("should contains a back Link",()=>{
    expect(wrapped.find(Link).length).toEqual(1);
});

it("should has correct back link path",()=>{
    expect(wrapped.find(Link).prop("to")).toEqual("/1");
});

it("should contains GalleryDetail",()=>{
    expect(wrapped.find(GalleryDetail).length).toEqual(1);
});

it("GalleryDetail should has correct id",()=>{
    expect(wrapped.find(GalleryDetail).prop("id")).toEqual("12345");
});

it("should contains GalleryImages",()=>{
    expect(wrapped.find(GalleryImages).length).toEqual(1);
});

