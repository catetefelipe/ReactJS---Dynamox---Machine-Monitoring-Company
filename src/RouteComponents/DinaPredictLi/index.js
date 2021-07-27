import React from "react";

// LINK QUE DIRECIONA PARA OUTRA PÁGINA DA SPA
import { Link } from "react-router-dom";



function DynaPredictLi(props) {
    return (
        <>
            <Link to="/dynapredict">
                {props.name}
            </Link>
        </>
    )
}

export default DynaPredictLi