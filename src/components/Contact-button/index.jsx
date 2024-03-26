import React from "react";
import './style.css'


/**
 * Componente que representa la sección de contacto.
 * Incluye información sobre cómo contactar y un botón para abrir un formulario.
 * 
  */
const ContactButton = () => {
    /**
     * Abre el formulario de contacto en una nueva ventana.
     */
    const openContactForm = () => {
      const formUrl = 'https://forms.gle/KsEzRoRcMxdGRRoCA';
      window.open(formUrl, '_blank');
    }
  
    return (
    
        <>
             <button className="contact-button-form" onClick={openContactForm}>
              Solicita tu Cotización
            </button>
        </>
      
    );
  }
  
  export { ContactButton };