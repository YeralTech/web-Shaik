import React from "react";
import debstImg from '../../asset/man-saving-money-energy-crisis.jpg'
import loanImg from '../../asset/realtor-making-deal-with-customer-office.jpg'
import ungencyImg from '../../asset/young-cute-family-repairs-room.jpg'
import bussinesImg from '../../asset/i-m-waiting-delivery-fresh-ingredients.jpg'
import { ButtonContact } from "../../components/button";
import { BreadCrumb } from 'primereact/breadcrumb';
import { IoHome } from "react-icons/io5";
const Service = () => {

    const servicesData = [
        { 
            serviceImg: debstImg,
            serviceTitle: 'Consolida tus cuentas',                    
            serviceDescription: 'Te ayudamos a mejorar tu APC, cancelar tus deudas para que recibas mas dinero.',
            serviceImgAlt: ''
        },
        { 
            serviceImg: loanImg,
            serviceTitle: 'Préstamos con garantía hipotecaria',
            serviceDescription: 'Tienes un terreno, apartamento o casa que quieres poner en garantía, nostros te asesoramos con las mejores opciones.',
            serviceImgAlt: ''
        },
        { 
            serviceImg: ungencyImg,
            serviceTitle: 'Remodela tu Hogar  ',                    
            serviceDescription: 'Contamos con un servicio personalizado donde te asesoraremos con las mejores opciones para que logres tu meta.',
            serviceImgAlt: ''
        },
        { 
            serviceImg: bussinesImg,
            serviceTitle: 'Crea tu propio negocio',                    
            serviceDescription: 'Te ayudamos con las mejores opciones en préstamos para que puedas invertir en tu proyecto o negocio.',
            serviceImgAlt: ''
        },
   
    ]

    const items = [
        { label: 'Servicios', url: '/' },
      
    ];

    const home = { icon: <IoHome />, url: '/' };
    return(
        <>
        <BreadCrumb model={items} home={home} className="flex text-primary-primary px-8  my-6  w-1/2 h-8 justify-center" />
        <section id="service-section"
            className="flex flex-col justify-center items-center w-full px-20 py-20 h-auto ">
             <h1 id="service-title" className="text-4xl font-bold text-primary-background pb-6">Servicios</h1>
            <div id="service-container"
                className="grid grid-cols justify-center  w-auto h-auto  gap-6 p-4 max-w-screen-lg w-full md:grid-cols-2 lg:grid-cols-3">
           
            {servicesData.map((data, index) => (

            <div  id="service-container-card"
                className="flex flex-col  items-center w-auto h-auto bg-primary-white text-primary-background text-lg rounded-xl rounded-t-md pb-10 drop-shadow-xl " key={index}>
                <img id="service-img" className="rounded-t-2xl pt-2 w-auto" src={data.serviceImg} alt={data.serviceImgAlt} />
                <h2 id="service-subtitle" className="text-2xl font-semibold py-2 px-6">{data.serviceTitle}</h2>
                <p id="service-description" className="text-base pb-8 px-6 py-4">{data.serviceDescription}</p>
                <ButtonContact/>
            </div>
  ))}
  
        </div>
        
        </section>

        </>
      )
    }      

export { Service }