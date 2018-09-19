import React from "react";
import BackArrow from "../img/back-arrow.svg";

function BackButton() { // eslint-disable-line arrow-body-style
    return (
        <div className="Back-btn">
            <img src={BackArrow} />
        </div>
    );
}

export default BackButton;