import React from "react";
import "./styles.css";



const STYLES = ["darkblue_btn", "defaultblue_btn"];

export const Button = ({
    buttonStyle,
    children     /* permite a alteração do nome do botão */
    }) => {
    
    /* uma função que define a cor inicial ou altera a propriedade CSS do botão */
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];



    return (
        <>
            <button
            className={`button ${checkButtonStyle}`}
            >
                {children}
            </button>
        </>
        )
    }