import React from 'react';

import { NavLink } from 'react-router-dom';
import logoShaik from '../../asset/logoShaik-min-removebg-preview.png';
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
        <ul role='list' className='navbar-list active flex gap-2 text-center'>
          <li 
            className='
              hover:bg-primary-hover p-1 
              hover:text-primary-background rounded
              '>
              <NavLink to="/" 
              className='active text-center  
              focus:bg-primary-hover focus:text-primary-light rounded p-1'>Home</NavLink></li>
          <li 
            className='
              hover:bg-primary-hover p-1 
              hover:text-primary-light rounded 
             '>
            <NavLink to="/nosotros" 
              className='active
              focus:bg-primary-hover focus:text-primary-light rounded p-1
              '>Nosotros</NavLink></li>
          <li 
            className='
              hover:bg-primary-hover p-1 
              hover:text-primary-light rounded p-1'>
            <NavLink to="/servicios" 
            className='active
            focus:bg-primary-hover focus:text-primary-light rounded p-1'
            >Servicios</NavLink></li>
          <li 
            className='
              hover:bg-primary-hover p-1 
              hover:text-primary-light rounded p-1'>
            <NavLink to="/blog" 
            className='active
            focus:bg-primary-hover focus:text-primary-light rounded p-1'
            >Blog</NavLink></li>
          <li className='
              hover:bg-primary-hover p-1 
              hover:text-primary-light rounded p-1'>
            <NavLink to="/preguntas" 
            className='active
            focus:bg-primary-hover focus:text-primary-light rounded p-1'
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
