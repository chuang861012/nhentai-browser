import React from "react";
import {shallow} from "enzyme";
import GallerySearcher from "../gallery_searcher";

import GalleryList from "../../containers/gallery_searcher/gallery_list";
import SeachBar from "../../containers/gallery_searcher/search_bar";

let wrapped;

beforeEach(()=>{
    const fakeParams = {
        params:{
            id:"12345"
        }
    }
    wrapped = shallow(<GallerySearcher match={fakeParams}/>);
});

it("should contains SearchBar",()=>{
    expect(wrapped.find(SeachBar).length).toEqual(1);
});

it("should contains GalleryList",()=>{
    expect(wrapped.find(GalleryList).length).toEqual(1);
});