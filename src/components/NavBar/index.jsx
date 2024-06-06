import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import logoShaik from '../../asset/logoShaik-min-removebg-preview.png';

import { WhatsApp } from '../WhatsappButton';

// Componente de barra de navegación con enlaces a diferentes secciones y un botón de contacto de WhatsApp.
const NavBar = () => {

  return (
    <nav className="navBar  flex  justify-center items-center py-8  " >
      <div className="navBar-container w-auto flex  justify-center items-center gap-7 ">
      
        <img src={logoShaik} alt="Logo de Shaik Asesores" />
        <ul className='navbar-list active flex gap-4 ml-20'>
          <li><NavLink to="/" className='active'>Home</NavLink></li>
          <li><NavLink to="/nosotros" className='active'>Nosotros</NavLink></li>
          <li><NavLink to="/aplican" className='active'>Aplican</NavLink></li>
          <li><NavLink to="/blog" className='active'>Blog</NavLink></li>
          <li><NavLink to="/preguntas" className='active'>Preguntas Frecuentes</NavLink></li>
        </ul>
        <WhatsApp/>
      </div>
      
   
      {/*  <ul className='navbar-mobile active'>
          <li><NavLink to="/" className='active'>Home</NavLink></li>
          <li><NavLink to="/nosotros" className='active'>Nosotros</NavLink></li>
          <li><NavLink to="/aplican" className='active'>Aplican</NavLink></li>
          <li><NavLink to="/blog" className='active'>Blog</NavLink></li>
          <li><NavLink to="/preguntas" className='active'>Preguntas Frecuentes</NavLink></li>
        </ul>
      */}
    </nav>
  );
}

export { NavBar };
