import React from 'react';
import { ServiceCard } from '../../components/WhoApplyCard';
import privadaImg from '../../asset/ejecutivo-dinero-min.png';
import gobiernoImg from '../../asset/ejecutivos-min.png';
import fuerzaPublicaImg from '../../asset/policia-min.png';
import saludImg from '../../asset/enfermeros-min.png';
import jubilados from '../../asset//jubilados-min.png';
import independientesImg from '../../asset/asesorando-min.png';
import acpImg from '../../asset/acp-min.png'
import PymeImg from '../../asset/microempresarios.png';
import '../../components/WhoApply-Card/syle.css';
import './style.css'


const QuienesAplican = () => {
  const serviceCardData = [
    {
      typeCompany: 'Empresa Privada',
      content: 'Aplican desde 4 meses permanente.',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: privadaImg
 
    },
    {
      typeCompany: 'Gobierno',
      content: 'Aplicas desde recién nombrado, ya seas permanente o eventual!.',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: gobiernoImg,

    },
    {
      typeCompany: 'Fuerza Publica',
      content: 'Aplicas desde recién nombrado!. Consolidamos tus cuentas y cancelamos embargos.',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: fuerzaPublicaImg
    },
    {
      typeCompany: 'Sector Salud y Educadores',
      content: 'Recibes hasta $80,000.00 y hasta 25 años de plazo. Cancelamos embargos y consolidamos tus cuentas',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: saludImg
    },
     {
      typeCompany: 'Jubilados y Pensionados',
      content: 'Tenemos opciones sin exámen médico y sin cancelar cuentas atrasadas!. Con plazos hasta los 85 años.',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: jubilados 
    },
    {
      typeCompany: 'ACP',
      content: 'Aplican desde 4 meses permanente.',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: acpImg
    },
    {
      typeCompany: 'Independientes ',
      content: 'Aplican desde 4 meses permanente.',
      requisitos: 'Carta de Trabajo | Cédula | Ficha CSS | Comprobante de pago',
      img: independientesImg
    },
    {
      typeCompany: 'MicroEmpresarios ',
      content: 'Aplican desde 4 meses permanente.',
      requisitos: 'Ingreso mínimo de $ 600.00. Debe presentar estados de cuenta bancaria de los últimos 3 meses. | Cédula | Tener entre 25 y 54 años. | Aviso de operaciones con 2 años de vigencia.',
      img: PymeImg
    },
    
    // ... otras categorías de aplicantes
  ];
   
 

  return (

    <>
    <h1 className='whoApply-Title'>Quienes Aplican</h1>
    <p className='whoApply-Text' >¡Es el momento de cumplir tus sueños y nosotros te apoyamos! <br/> Evaluamos tu caso para brindarte préstamos que se ajustan a tus necesidades por Descuento Directo o por Pago Voluntario</p>
    <div className='service-Container'>
      {serviceCardData.map((data, index) => (
        <ServiceCard key={index} {...data} />
      ))}


    </div>
    </>
    
    
   
  );
};



export { QuienesAplican };





    /*  <div>
      <h1>¿QUIÉNES APLICAN?</h1>
      
     Ejemplo de una categoría de aplicantes 
      <div className="apply-container">
        <div className="container-text-apply">
          <h2>Empresa Privada </h2>
          <p>Aplican desde 4 meses de permanencia. </p>
          <button id="quote-button">Cotiza</button>
        </div>
        <img src="./assets/pngwing 4.png" alt="Icono de empresa privada" />
      </div>

      {/* Repite el patrón para otras categorías de aplicantes 

      <div className="apply-container-green">
        <img src="./assets/pngwing 7.png" alt="Icono de profesionales de la salud" />
        <div className="container-text-apply-green">
          <h2>Profesionales de la salud </h2>
          <p>Aplican desde un mes de permanencia. Cancelamos embargos y referencias afectadas.</p>
          <button id="quote-button">Cotiza</button>
        </div>
      </div>

      {/* Repite el patrón para otras categorías de aplicantes 

      <div className="apply-container">
        <div className="container-text-apply">
          <h2>Gobierno </h2>
          <p>Eventuales, Recién nombrados, Permanentes</p>
          <button id="quote-button">Cotiza</button>
        </div>
        <img src="./assets/pngegg (55).png" alt="Icono de gobierno" />
      </div>

      {/* Repite el patrón para otras categorías de aplicantes 

      <div className="apply-container-green">
        <img src="./assets/pngwing.com (14).png" alt="Icono de jubilados" />
        <div className="container-text-apply-green">
          <h2>Jubilados </h2>
          <p>Sin exámenes hasta los 85 años</p>
          <button id="quote-button">Cotiza</button>
        </div>
      </div>

      {/* Repite el patrón para otras categorías de aplicantes 

      <div className="apply-container">
        <div className="container-text-apply">
          <h2>Fuerza Pública </h2>
          <p>Cancelamos malas referencias</p>
          <button id="quote-button">Cotizar</button>
        </div>
        <img src="./assets/pngwing.com (15).png" alt="Icono de fuerza pública" />
      </div>

      {/* Repite el patrón para otras categorías de aplicantes 

      <div className="apply-container-green">
        <img src="./assets/pngwing 10.png" alt="Icono de independientes" />
        <div className="container-text-apply-green">
          <h2>Independientes </h2>
          <p>Dos últimas declaraciones de renta, paz y salvo, estados de cuentas (mínimo 6 meses)</p>
          <button id="quote-button">Cotiza</button>
        </div>
      </div>

      {/* Repite el patrón para otras categorías de aplicantes 

      <h2>Micro-Empresarios </h2>
      <button id="quote-button">Cotiza</button>
      <img src="" alt="" /> {/* Asegúrate de agregar una URL de imagen aquí 
    </div>
  );
}
*/


