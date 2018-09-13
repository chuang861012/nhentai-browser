const request = require("request");

function getBookById(id){
    return new Promise((resolve)=>{
        request(`https://nhentai.net/api/gallery/${id}`,(err,res,body)=>{
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
        return request(url,(err,res,body)=>{
            resolve(body);
        });
    });
}

module.exports = {getBookById,getBooks};