const request = require("request");

function getBookById(id){
    return new Promise((resolve)=>{
        request({
            url:`https://nhentai.net/api/gallery/${id}`,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36"
            }
        },(err,res,body)=>{
            console.log("statusCode:",res.statusCode);
            if(err){
                console.log("error:",err);
            }
            resolve(body);
        });
    });
}

function getBooks(query=null,page=1){
    let url;
    if(query!==null){
        url = `https://nhentai.net/api/galleries/search?query=${encodeURIComponent(query)}&page=${page}&sort=date`;
    }else{
        url = `https://nhentai.net/api/galleries/all?page=${page}&sort=date`;
    }
    return new Promise((resolve)=>{
        return request({
            url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36"
            }
        },(err,res,body)=>{
            console.log("statusCode:",res.statusCode);
            if(err){
                console.log("error:",err);
            }
            resolve(body);
        });
    });
}

module.exports = {getBookById,getBooks};