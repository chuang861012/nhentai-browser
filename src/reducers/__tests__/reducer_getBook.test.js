import reducer_getBook from "../reducer_getBook";
import {GET_BOOK} from "../../actions/index";

it("should return book data",()=>{
    const action = {
        type:GET_BOOK,
        payload:{
            data:["book data #1","book data #2"]
        }
    };

    expect(reducer_getBook(null,action)).toEqual(["book data #1","book data #2"]);
});

it("should return empty object",()=>{
    const action = {
        type:"123456",
        payload:{
            data:["book data #1","book data #2"]
        }
    };

    expect(reducer_getBook(null,action)).toEqual({});
});