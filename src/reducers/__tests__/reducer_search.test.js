import reducer_search from "../reducer_search";
import {SEARCH_NHENTAI} from "../../actions/index";

it("should return currect search result",()=>{
    const action = {
        type:SEARCH_NHENTAI,
        payload:{
            config:{
                url:"localhost:8080"
            },
            data:{
                result:[1,2,3,4,5],
                num_pages:5
            }
        },
        meta:{
            page:1
        }
    }
    const expected_result = {
        data:[1,2,3,4,5],
        current_page:1,
        max_page:5,
        url:"localhost:8080"
    }
    expect(reducer_search(null,action)).toEqual(expected_result);
});

it("should return null data result",()=>{
    const action = {
        type:"something else",
        payload:{
            config:{
                url:"localhost:8080"
            },
            data:{
                result:[1,2,3,4,5],
                num_pages:5
            }
        },
        meta:{
            page:1
        }
    };
    const expected_result = {data:null,current_page:1,max_page:1};
    expect(reducer_search(undefined,action)).toEqual(expected_result);
});