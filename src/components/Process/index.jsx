import React from "react"; 
import { FaCheckCircle } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import './style.css'




/**
* Componente que representa el proceso de solicitud de préstamo.
* Muestra tres etapas: Evaluación, Cotización y Desembolso.
* Cada etapa tiene un icono y una descripción asociada.
*/

const ApplyProcess = () => {

    return (
      <>
      <h1 className="ServiceProcess-Title">Conoce Nuestro Proceso </h1>   
        <div className="apply-container">
 
          <div className="apply-card">
            <h2 className="apply-Title"> <FaCheckCircle /> Evaluación </h2>
            <p>
              Ingresa tus datos para que el sistema pueda evaluar tu información.
              En este paso podrás contactar a un asesor para que aclare tus dudas
              o te ayude a ingresar tus datos.
            </p>
          </div> 
          
          <div className="apply-card">
            <h2 className="apply-Title"> <BsPencilSquare /> Cotización </h2>
            <p>
              Una vez analizado tu caso junto a nuestros aliados financieros, te mostraremos
              diferentes propuestas en cuanto a seguridad, rentabilidad, letra, intereses y plazo.
              ¡Tú eliges la mejor propuesta!
            </p>
          </div> 
          
          <div className="apply-card">
            <h2 className="apply-Title"> <FaSackDollar /> Desembolso </h2>
            <p>
              Una vez aprobada tu propuesta, recibirás tu dinero.
              ¡Goza de los beneficios, realiza esa meta soñada y sigamos creciendo juntos!
            </p>
        
          </div> 
    
        </div>
        </>
      );
    }
    
    export { ApplyProcess };