import React from "react";
import './style.css'

/**
 * Componente que muestra un loader con puntos animados.
 */
const Loaderblog = () => {
    return (
        <>
            <section className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </section>
        </>
    );
}

export { Loaderblog }
