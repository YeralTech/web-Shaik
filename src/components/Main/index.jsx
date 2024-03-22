// Main.jsx
import React from 'react';
import mainImg from '../../asset/dinero-min.png';
//import { CustomModal } from '../Modal/Modal';
//import './modal.css';
import './style.css';
import './mobile.css'

/**
 * Componente principal que representa la sección principal de la aplicación.
 * Incluye una imagen principal, un formulario modal y una sección secundaria.
 * */
const Main = () => {
 /* const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };*/

  return (
    <>
   
      <div className="main-container">
      
        
         <img src={mainImg} alt="dinero" />
        
      
        <div className="main-container-text">
          <h1 className="main-title">¿NECESITAS DINERO?</h1>
          <h2 className="main-subtitle-title">¡No tienes capacidad o tienes mala apc!</h2>
          <p className="main-subtitle">No te preocupes por tu APC</p>
          <h2 className="main-subtitle-title">¡Sin costo!</h2>
         {/* <button onClick={openModal} className="apply-Button">
            Descubre YA si Aplicas!
  </button>*/}
        </div>

      </div>
     
      {/* Pasar propiedades al componente CustomModal */}
      {/* <CustomModal isOpen={modalIsOpen} closeModal={closeModal} /> */}
    </>
  );
};

export { Main };
 