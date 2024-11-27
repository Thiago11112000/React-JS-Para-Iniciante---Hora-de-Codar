import React from 'react';
import "./StylesExamples.css"; // CSS global
import Styles from "./StylesExamples.module.css"; // CSS Module

function StylesExamples() {
    // Estilo inline
    const inlineStyle = {
        color: "blue",
        fontSize: "20px"
    };

    return (
        <div>
            <h2 style={inlineStyle}>Estilos inline</h2>

            {/* Uso de CSS global */}
            <p className="text">Meu CSS Global</p>

            {/* Uso de CSS Modules */}
            <p className={Styles.textPurple}>Meu CSS Module</p>
        </div>
    );
}

export default StylesExamples;
