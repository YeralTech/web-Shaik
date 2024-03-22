import React from "react";
import { Main } from "../../components/Main";
import { ApplyProcess } from "../../components/Process";
import { Services } from '../../components/Services'
import { Contact } from "../Contact";
import { Banner } from "../../components/Banner-Home";




/**
 * Página principal que renderiza los componentes principales de la aplicación.
 * Incluye la sección principal, el proceso de servicios, la sección de aplicantes y la sección de contacto.
 */
const Home = () => {
  
  return (
    <>
      {/* Sección principal */}
      <Main />
      

      {/* Proceso de servicios */}
      <ApplyProcess />

      {/* Banner - servicio gratuito */}
      <Banner/>
      
      {/* Sección de aplicantes */}
      <Services />

      {/* Sección de contacto */}
      <Contact />
    </>
  );
}

export { Home };
