import axios from "axios";
import {API_URL} from "../data";

export const SEARCH_NHENTAI = "SEARCH_NHENTAI";
export const GET_BOOK = "GET_BOOK";

export function searchNhentai(input_url = `${API_URL}/search?`, page = 1) {
    const url = `${input_url}&page=${page}`;
    const payload = axios.get(url);

    return {
        meta:{page},
        type:SEARCH_NHENTAI,
        payload
    };
}

export function getBookById(id){
    const url = `${API_URL}/book?id=${id}`;
    const payload = axios.get(url);

    return {
        type:GET_BOOK,
        payload
    }
}