import React from "react";
import './syle.css'


const ServiceCard = ({ typeCompany, content, img, requisitos }) => {

  return (

        <div className="card-Container">
        <img src={img} alt="Icono de empresa privada" />
        <h2 className="card-container-Title">{typeCompany}</h2>
        <p>{content}</p>
        <p className="requisitos"> Requisitos: <br></br> {requisitos}</p>
        </div>
    
      
      
    )

}


export { ServiceCard }