import React from 'react';

import { NavLink } from 'react-router-dom';
import logoShaik from '../../asset/LOGO2.png';
import { ButtonNavBar } from '../button';

const NavBar = () => {

  return (
    <nav className="navBar flex justify-center items-center py-2  w-full px-4 shadow-lg mb-2 "
    >
      <div className="navBar-container flex justify-center items-center  p-4 max-w-screen-lg w-full text-primary-primary bg-white pointer"
      >
        <img className='w-40 mr-6'
          src={logoShaik} 
          alt="Logo de Shaik Asesores" />
        <ul role='list' className='navbar-list active flex gap-4 text-center'>
          <li className="text-primary-background relative">
              <NavLink to="/" 
              className='active  hover:text-primary-hover hover-focus-underline   py-2 focus:outline-none focus:text-primary-hover'
             >Home</NavLink></li>
          <li className="text-primary-background relative"
           >
            <NavLink to="/nosotros" 
              className='active  hover:text-primary-hover hover-focus-underline   py-2 focus:outline-none focus:text-primary-hover'
              >Nosotros</NavLink></li>
          <li className="text-primary-background relative">
            <NavLink to="/servicios" 
          className='active  hover:text-primary-hover hover-focus-underline   py-2 focus:outline-none focus:text-primary-hover'
            >Servicios</NavLink></li>
          <li 
            className="text-primary-background relative">
            <NavLink to="/blog" 
              className='active  hover:text-primary-hover hover-focus-underline   py-2 focus:outline-none focus:text-primary-hover'
            >Blog</NavLink></li>
          <li className="text-primary-background relative">
            <NavLink to="/preguntas" 
           className='active  hover:text-primary-hover hover-focus-underline   py-2 focus:outline-none focus:text-primary-hover'
            >Preguntas Frecuentes</NavLink></li>
                  <ButtonNavBar/>
        </ul>

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

export default NavBar
