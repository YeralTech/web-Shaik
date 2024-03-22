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
import '../../components/WhoApplyCard/style.css';
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




