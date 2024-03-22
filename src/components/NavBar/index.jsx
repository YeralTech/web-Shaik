import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logoShaik from '../../asset/logoShaik-min.png';
import './style.css';
import { WhatsApp } from '../WhatsappButton';




// Componente de barra de navegación con enlaces a diferentes secciones y un botón de contacto de WhatsApp.
const NavBar = () => {
 
    
    return(
        <nav className="navBar">
            <div className="navBar-container" >
            <img  src={logoShaik} alt="Logo de Shaik Consultores" />
            <ul className='navbar-list active'>
                <li><NavLink to="/" className='active'>Home</NavLink></li>
                <li><NavLink to="/nosotros" className='active'>Nosotros</NavLink></li>
                <li><NavLink to="/aplican" className='active'>Aplican</NavLink></li>
                <li><NavLink to="/blog" className='active'>Blog</NavLink></li>
                <li><NavLink to="/preguntas" className='active'>Preguntas Frecuentes</NavLink></li>
    
            </ul>
            <FaBars className='icon active' />
            <WhatsApp/>
        </div>
</nav>
    )
    }

export { NavBar}
