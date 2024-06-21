import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import logoShaik from '../../asset/LOGO2.png';
import { ButtonNavBar } from '../button';

const NavBar = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const toggleOpenMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
  };




  const navLinkClasses = 'active hover:text-primary-hover hover-focus-underline py-2 focus:outline-none focus:text-primary-hover';

  return (
    <nav className="navBar flex flex-col items-center py-2 w-full px-4 shadow-lg mb-2">
      <div className="navBar-container flex justify-center items-center p-4 max-w-screen-lg w-full text-primary-primary bg-white">
        <img className="w-40 h-auto mr-40" src={logoShaik} alt="Logo de Shaik Asesores" />
        
        <ul role="list" className="navbar-list active flex gap-4 text-center justify-center items-center">
          <li className="text-primary-background relative">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          </li>
          <li className="text-primary-background relative">
            <NavLink to="/nosotros" className={navLinkClasses}>Nosotros</NavLink>
          </li>
          <li className="text-primary-background relative">
            <NavLink to="/servicios" className={navLinkClasses}>Servicios</NavLink>
          </li>
          <li className="text-primary-background relative">
            <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
          </li>
          <li className="text-primary-background relative">
            <NavLink to="/preguntas" className={navLinkClasses}>Preguntas Frecuentes</NavLink>
          </li>
          <ButtonNavBar />
        </ul>

        <div className="lg:hidden">
          <IoMdMenu onClick={toggleOpenMenuMobile} className="text-3xl cursor-pointer" aria-expanded={openMenuMobile} aria-controls="mobile-menu" />
        </div>
      </div>

      {openMenuMobile && (
        <div id="mobile-menu" className="menu-mobile absolute flex flex-col w-52 h-70 px-4 rounded-lg py-8 bg-primary-white top-24 left-3/4 shadow-lg z-50">
          <ul role="list" className="navbar-list-mobile active flex flex-col gap-4 items-center">
            <li className="text-primary-background relative w-auto">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            </li>
            <li className="text-primary-background relative">
              <NavLink to="/nosotros" className={navLinkClasses}>Nosotros</NavLink>
            </li>
            <li className="text-primary-background relative">
              <NavLink to="/servicios" className={navLinkClasses}>Servicios</NavLink>
            </li>
            <li className="text-primary-background relative">
              <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
            </li>
            <li className="text-primary-background relative mb-2">
              <NavLink to="/preguntas" className={navLinkClasses}>Preguntas Frecuentes</NavLink>
            </li>
          </ul>
        </div>
      )}

    
    </nav>
  );
};

export default NavBar;
