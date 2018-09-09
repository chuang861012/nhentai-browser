import {searchNhentai,SEARCH_NHENTAI,getBookById,GET_BOOK} from "../index";

describe("searchNhentai",()=>{
    it("should has correct type",()=>{
        const action = searchNhentai();
        expect(action.type).toEqual(SEARCH_NHENTAI);
    });
    it("should has correct page",()=>{
        const action = searchNhentai();
        expect(action.meta).toEqual({page:1});
    });
});

describe("getBookById",()=>{
    it("should has correct type",()=>{
        const action = getBookById(123);
        expect(action.type).toEqual(GET_BOOK);
    });
});
