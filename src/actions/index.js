import axios from "axios";

export const SEARCH_NHENTAI = "SEARCH_NHENTAI";
export const GET_BOOK = "GET_BOOK";

// fetch search result
export function searchNhentai(input_url = "/api/search?", page = 1) {
    const url = `${input_url}&page=${page}`;
    const payload = axios.get(url);

    return {
        meta:{page},
        type:SEARCH_NHENTAI,
        payload
    };
}

// fetch book data by id
export function getBookById(id){
    const url = `/api/id?id=${id}`;
    const payload = axios.get(url);

    return {
        type:GET_BOOK,
        payload
    };
}