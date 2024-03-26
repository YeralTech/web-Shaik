import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import logoShaik from '../../asset/logoShaik-min.png';
import './style.css';
import { WhatsApp } from '../WhatsappButton';

// Componente de barra de navegación con enlaces a diferentes secciones y un botón de contacto de WhatsApp.
const NavBar = () => {
  // Estado para gestionar el menú hamburguesa
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="navBar">
      <div className="navBar-container">
        {mobileMenuOpen ? (
          <IoMdCloseCircle onClick={handleMobileMenu} className='icon active' />
        ) : (
          <FaBars onClick={handleMobileMenu} className='icon active' />
        )}
        <img src={logoShaik} alt="Logo de Shaik Asesores" />
        <ul className='navbar-list active'>
          <li><NavLink to="/" className='active'>Home</NavLink></li>
          <li><NavLink to="/nosotros" className='active'>Nosotros</NavLink></li>
          <li><NavLink to="/aplican" className='active'>Aplican</NavLink></li>
          <li><NavLink to="/blog" className='active'>Blog</NavLink></li>
          <li><NavLink to="/preguntas" className='active'>Preguntas Frecuentes</NavLink></li>
        </ul>
        <WhatsApp/>
      </div>
      
      {mobileMenuOpen && (
        <ul className='navbar-mobile active'>
          <li><NavLink to="/" className='active'>Home</NavLink></li>
          <li><NavLink to="/nosotros" className='active'>Nosotros</NavLink></li>
          <li><NavLink to="/aplican" className='active'>Aplican</NavLink></li>
          <li><NavLink to="/blog" className='active'>Blog</NavLink></li>
          <li><NavLink to="/preguntas" className='active'>Preguntas Frecuentes</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export { NavBar };
