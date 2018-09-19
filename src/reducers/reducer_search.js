import {
    SEARCH_KEYWORD
} from "../actions/index";

export default function (state = {data:null,current_page:"1",max_page:"1"}, action) {
    switch (action.type) {
        case SEARCH_KEYWORD:
            return {
                data:action.payload.data.result,
                current_page:action.meta.page.toString(),
                max_page:action.payload.data.num_pages.toString(),
                url:action.payload.config.url
            };
    }
    return state;
}