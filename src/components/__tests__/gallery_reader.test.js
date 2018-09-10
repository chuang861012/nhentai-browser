import React from 'react';
import {HashRouter,Link} from "react-router-dom";
import GalleryReader from "../gallery_reader";
import Root from "../../Root";
import {mount} from "enzyme";
import ImageLoader from "../image-loader";

let wrapped;
beforeEach(() => {
    const match = {
        params: {
            id: 246073,
            page: 2
        }
    };

    const location = {
        state: {
            images: [{
                    "t": "j",
                    "w": 1239,
                    "h": 1820
                },
                {
                    "t": "j",
                    "w": 1239,
                    "h": 1820
                },
                {
                    "t": "j",
                    "w": 1239,
                    "h": 1820
                },
                {
                    "t": "j",
                    "w": 1239,
                    "h": 1820
                },
                {
                    "t": "j",
                    "w": 1239,
                    "h": 1820
                }
            ],
            media_id: 1284211
        }
    }

    wrapped = mount(
        <Root>
            <HashRouter>
                <GalleryReader match={match} location={location} id={246073}/>
            </HashRouter>
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount(); // clean up full dom
});

describe("back-btn",()=>{
    it("should contains a back button", () => {
        expect(wrapped.find(".Back-btn").length).toEqual(1);
    });
    it("should has a corrent Link path", () => {
        expect(wrapped.find(Link).first().prop("to").pathname).toEqual("/g/246073");
    });
})

describe("counter",()=>{
    it("should contains 2 counter", () => {
        expect(wrapped.find(".reader-img-counter").length).toEqual(2);
    });
    it("should be correct",()=>{
        expect(wrapped.find(".reader-img-counter").first().text()).toEqual("2 / 5");
    });
})

describe("image-reader",()=>{
    it("should contains 2 Links", () => {
        expect(wrapped.find(".reader-img-left").length).toEqual(1);
        expect(wrapped.find(".reader-img-right").length).toEqual(1);
    });
    it("left part should has correct Link",()=>{
        expect(wrapped.find(Link).get(1).props.to.pathname).toEqual("/g/246073/1")
    });
    it("right part should has correct Link",()=>{
        expect(wrapped.find(Link).get(2).props.to.pathname).toEqual("/g/246073/3")
    });
    it("should contains 1 image", () => {
        expect(wrapped.find(ImageLoader).length).toEqual(1);
    });
})