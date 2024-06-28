import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import logoShaik from '../../asset/LOGO2.png'
import { ButtonContact } from '../button'

const NavBar = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  const toggleOpenMenuMobile = () => {
    const menuDesktop = document.querySelector('.menu-desktop')
    setOpenMenuMobile(!openMenuMobile);
    if (openMenuMobile === true) {
       menuDesktop === false
    } 
  }

  const navLinkClasses = ' active hover:text-primary-hover hover-focus-underline py-2 focus:outline-none focus:text-secondary-hover'

 const navLinkClassesMobile = 'text-primary-background w-auto hover:bg-primary-primary w-full hover:text-primary-light px-10 py-2 w-auto rounded relative focus:bg-secondary-primary focus:text-primary-primary'

  return (
    <nav className="flex flex-col items-center py-6 w-auto px-4 shadow-lg mb-2 mobile-sm:px-2 mobile-lg:px-4 ">
      <div className="navBar-container flex justify-center items-center p-2 max-w-screen-xl w-full text-primary-primary  mobile-sm:justify-between p-0 w-auto px-2 mobile-lg:justify-justify-between px-20">
        <img className="desktop:w-72 h-auto mr-20 mobile-sm:mr-8 w-60 mobile-lg:mr-12 tablet:mr-20" src={logoShaik} alt="Logo de Shaik Asesores" />
          <ul role="list" className="menu-desktop active  text-lg flex gap-4 text-center font-medium justify-center items-center mobile-sm:hidden mobile-lg:hidden tablet:hidden desktop:inline-flex desktop-lg:inline-flex">
          <li className="text-primary-primary  relative">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          </li>
          <li className="text-primary-primary relative">
            <NavLink to="/nosotros" className={navLinkClasses}>Nosotros</NavLink>
          </li>
          <li className="text-primary-primary  relative">
            <NavLink to="/servicios" className={navLinkClasses}>Servicios</NavLink>
          </li>
          <li className="text-primary-primary  relative">
            <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
          </li>
          <li className="text-primary-primary  relative">
            <NavLink to="/preguntas" className={navLinkClasses}>Preguntas Frecuentes</NavLink>
          </li>
          <ButtonContact/>
        </ul>

        <div className="desktop:hidden">
          <IoMdMenu onClick={toggleOpenMenuMobile} className="text-3xl cursor-pointer" aria-expanded={openMenuMobile} aria-controls="mobile-menu" />
        </div>
      </div>

      {openMenuMobile && (
        <div className="menu-mobile bg-primary-white absolute flex flex-col w-auto h-70  rounded-lg py-6  top-24 left-1/2 shadow-lg z-50 desktop:hidden tablet:left-3/4  mobile-sm:left-10  mobile-lg:left-1/2">
          <ul role="list" className="navbar-list-mobile active flex flex-col gap-4 items-center text-center text-base">
            <li className="text-primary-hove relative w-auto  ">
              <NavLink to="/" className={navLinkClassesMobile }>Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/nosotros" className={navLinkClassesMobile }>Nosotros</NavLink>
            </li>
            <li className="text-primary-primary  relative">
              <NavLink to="/servicios" className={navLinkClassesMobile }>Servicios</NavLink>
            </li>
            <li className="text-primary-primary  relative">
              <NavLink to="/blog" className={navLinkClassesMobile }>Blog</NavLink>
            </li>
            <li className="text-primary-primary  relative ">
              <NavLink to="/preguntas" className={navLinkClassesMobile }>Preguntas Frecuentes</NavLink>
            </li>
          </ul>
        </div>
      )}

    
    </nav>
  )
}

export default NavBar
