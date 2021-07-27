import React from "react";

// LINK QUE DIRECIONA PARA OUTRA PÁGINA DA SPA
import { Link } from "react-router-dom";

// IMAGEM LOGO
import logo from "../../Images/Header/logo-dynamox.png";



function LogoHeader() {
    return (
        <>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </>
    )
}

export default LogoHeader
