import React from "react";
import Loader from "../img/Interwind-1s-200px.svg";

export default ()=>{
    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            <h1 className="loading">Loading...</h1>
            <img src={Loader} className="loader-primary"/>
        </div>
    );
};