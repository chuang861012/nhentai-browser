import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {HashRouter,Route,Switch} from "react-router-dom";
import ReduxPromise from "redux-promise";

import GallerySearcher from './components/gallery_searcher';
import GalleryPage from "./components/gallery_page";
import GalleryReader from "./components/gallery_reader";
import reducers from './reducers';

import _ from "./style.css"

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <Switch>
        <Route path="/g/:id/:page" component={GalleryReader} />
        <Route path="/g/:id" component={GalleryPage} />
        <Route path="/query/:query?/:page?" component={GallerySearcher} />
        <Route path="/:page?" component={GallerySearcher} />
      </Switch>
    </HashRouter>
  </Provider>
  , document.querySelector('.container'));
