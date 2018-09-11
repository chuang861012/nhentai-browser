import {combineReducers} from "redux";
import reducer_search from "./reducer_search";
import reducer_getBook from "./reducer_getBook";

const rootReducer = combineReducers({
    gallery: reducer_search,
    book: reducer_getBook
});

export default rootReducer;