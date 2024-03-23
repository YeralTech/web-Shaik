import React from "react";
import contactImg from '../../asset/Atenncion al cliente-min.png';
import './style.css';

/**
 * Componente que representa la sección de contacto.
 * Incluye información sobre cómo contactar y un botón para abrir un formulario.
 * 
  */
const Contact = () => {
  /**
   * Abre el formulario de contacto en una nueva ventana.
   */
  const openContactForm = () => {
    const formUrl = 'https://forms.gle/KsEzRoRcMxdGRRoCA';
    window.open(formUrl, '_blank');
  }

  return (
  
      <section className='Contact-Form'>
       <div className="contact-Text">
          <h1>Contacto</h1>
          <p>No dudes en contactarnos, escuchamos cada caso, nuestra atención es personalizada</p>
            
      
      </div> 
      <img className="contact-Img" src={contactImg} alt="Ilustración de atención" /> 
      <button className="contact-Button active" onClick={openContactForm}>
            Solicita tu Cotización
          </button>
      </section>
    
  );
}

export { Contact };
