const express = require("express");
const compression = require("compression");
const url = require("url");
const path = require("path");
const {getBookById,getBooks} = require("./server/api");

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("/api/id",async(req,res)=>{
    const queryString = url.parse(req.url, true).query;
    res.send(await getBookById(queryString.id));
});

app.get("/api/search",async(req,res)=>{
    const queryString = url.parse(req.url, true).query;
    const query = queryString.query || null;
    const page = queryString.page || 1;
    res.send(await getBooks(query,page));
});

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(path.resolve(__dirname, "dist"),"index.html"));
});

app.listen(port,()=>{
    console.log(`server on port ${port}`);
});