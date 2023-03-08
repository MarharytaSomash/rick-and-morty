import React from "react";
import "./styleLogo.scss";

function ShowLogo() {
    return <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo" />;
}

export default ShowLogo;
