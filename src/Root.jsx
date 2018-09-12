import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxPromise from "redux-promise";
import PropTypes from "prop-types";

export const Root = ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

Root.propTypes = {
    children: PropTypes.element,
    initialState: PropTypes.object
};