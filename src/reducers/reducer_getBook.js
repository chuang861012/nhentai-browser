import {GET_BOOK} from "../actions/index";

export default function (state={}, action) {
    switch (action.type) {
        case GET_BOOK:
            return action.payload.data;
        default:
            return {};
    }
}