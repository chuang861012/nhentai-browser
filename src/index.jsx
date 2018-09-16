import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Root } from "./Root";
import { NavBar } from "./components/nav_bar";
import GalleryList from "./containers/gallery_list";
import GalleryPage from "./components/gallery_page";
import GalleryReader from "./components/gallery_reader";

import "./style/index.css";

ReactDOM.render(
    <Root>
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/g/:id/:page" component={GalleryReader} />
                        <Route path="/g/:id" component={GalleryPage} />
                        <Route path="/query/:query?/:page?" component={GalleryList} />
                        <Route path="/:page?" component={GalleryList} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    </Root>
    , document.querySelector(".container"));