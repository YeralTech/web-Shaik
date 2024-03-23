import React from "react";
import asesoreImg from '../../asset/happy-diverse-business-partners-closing-deal-min.jpg';
import shootIcon from '../../asset/shoot.png';
import rocketIcon from '../../asset/Rocket.png';

import './style.css';

/**
 * Componente que representa la sección "Nosotros".
 * Muestra información sobre la empresa, su misión y visión.
 * 
 * Uso:
 * ```jsx
 * <Nosotros />
 * ```
 */
const Nosotros = () => {
  return (
    
    <section className="about-Section">
      
      <h1 className="about-Title" >QUIENES SOMOS</h1>
      <h3>SOMOS LA SOLUCIÓN A TUS PROBLEMAS</h3>

      {/* Sección Quienes Somos */}
      <div className="about-container">
        
        <div className="left-column">
          
          <strong className="about-title">Quienes Somos</strong>
          <br />
          <span>
            Colaboramos con todas las instituciones crediticias para ayudarte a
            mejorar tu historial crediticio, obtener tu primer crédito y acceder a
            préstamos con garantías hipotecarias. Confía en nosotros para tus
            necesidades financieras, ¡estamos aquí para ayudarte a alcanzar tus
            objetivos!
          </span>
          
        </div>
        
        <div className="right-column">
          <img className="about-img" src={asesoreImg} alt="Equipo de asesores" />
        </div>
      </div>

      {/* Sección Misión */}
      <div className="mision-container">
        <div className="mision-left-column">
          <img className="shoot-Icon" src={shootIcon} alt="Ícono de objetivos" />
        </div>
        <div className="mision-right-column">
          <strong className="about-title">Misión</strong>
          <br />
          <span>
            Nos dedicamos apasionadamente a servir a nuestros clientes con
            excelencia, priorizando la satisfacción de sus necesidades y la
            resolución de sus desafíos financieros. Lo hacemos con un compromiso
            inquebrantable con la confianza y la responsabilidad, guiándonos por
            nuestros valores fundamentales en cada interacción.
          </span>
        </div>
      </div>

      {/* Sección Visión */}
      <div className="vision-container">
        <div className="vision-left-column">
          <strong className="about-title">Visión</strong>
          <br />
          <span>
            Ser la empresa líder preferida por los clientes y familias que buscan
            lograr estabilidad financiera y alcanzar sus sueños económicos.
            Nos esforzamos por ser reconocidos como líderes en asesoramiento
            crediticio y soluciones financieras innovadoras.
          </span>
        </div>
        <div className="vision-right-column">
          <img className="rocket-Icon" src={rocketIcon} alt="Ícono de cohete" />
        </div>
      </div>
      
    </section>
  );
}

export { Nosotros };
