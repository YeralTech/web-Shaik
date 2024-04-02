import React from "react";
import './style.css'
import './mobile.css'

/**
 * Componente que representa una tarjeta de servicio.
 * Recibe props para definir el tipo de compañía, el contenido, la imagen y los requisitos.
 */
const ServiceCard = ({ typeCompany, content, img, requisitos }) => {
  return (
    <>
      <section className="card-Container">
        <img src={img} alt="Icono de empresa privada" />
        <h2 className="card-container-Title">{typeCompany}</h2>
        <p>{content}</p>
        <p className="requisitos"> Requisitos: <br></br> {requisitos}</p>
      </section>
    </>
  );
}

export { ServiceCard }
