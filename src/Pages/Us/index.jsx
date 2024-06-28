import React from "react";
import { BreadCrumb } from 'primereact/breadcrumb';
import usImg from '../../asset/Atenncion al cliente-min.png'
import misionImg from '../../asset/hands-holding-puzzle-business-problem-solving-concept.jpg'
import visionImg from '../../asset/hands-working-laptop-network-graphic-overlay.jpg'
//import bannerUs from '../../asset/banner-nosotros.png'
import { IoHome } from "react-icons/io5";

const UsSection = () => {
    const usData = [
        {
            titleUS: 'Quienes Somos',
            descriptionUs: 'Contamos con más de 30 años de experiencia. Colaboramos con todas las instituciones crediticias para ayudarte a mejorar tu historial crediticio, obtener tu primer crédito y acceder a préstamos con garantías hipotecarias. Confía en nosotros para tus necesidades financieras, ¡estamos aquí para ayudarte a alcanzar tus objetivos!',
            imgUs: usImg
        },
        {
            titleUS: 'Misión',
            descriptionUs: 'Nos dedicamos apasionadamente a servir a nuestros clientes con excelencia, priorizando la satisfacción de sus necesidades y la resolución de sus desafíos financieros. Lo hacemos con un compromiso inquebrantable con la confianza y la responsabilidad, guiándonos por nuestros valores fundamentales en cada interacción.Contamos con más de 30 años de experiencia. Colaboramos con todas las instituciones crediticias para ayudarte a mejorar tu historial crediticio, obtener tu primer crédito y acceder a préstamos con garantías hipotecarias. Confía en nosotros para tus necesidades financieras, ¡estamos aquí para ayudarte a alcanzar tus objetivos!',
            imgUs: misionImg
        },
        {
            titleUS: 'Vision',
            descriptionUs: ' Ser la empresa líder preferida por los clientes y familias que buscan lograr estabilidad financiera y alcanzar sus sueños económicos. Nos esforzamos por ser reconocidos como líderes en asesoramiento crediticio y soluciones financieras innovadoras.',
            imgUs: visionImg
        },
    ]
    const items = [
        { label: 'Nosotros', url: '/' },
      
    ];

    const home = { icon: <IoHome />, url: '/' };
    return (
        <> 
         <BreadCrumb model={items} home={home} className="flex text-primary-primary px-8  my-6  w-1/2 h-8 justify-center" />
            <section id="us-section" className=" flex flex-col justify-center items-center w-auto h-auto px-10 py-10  gap-10">
                <h1 id="us-title" className=" text-4xl font-bold text-primary-primary">Nosotros</h1>
                {usData.map((data, index) => (
                    <div id="us-container-cards" className=" flex flex-col justify-center  items-center py-8  max-w-screen-lg w-full  rounded text-primary-primary   shadow-lg  " key={index}>
                    <h2 id="us-subtitle" className="text-2xl pb-4 font-medium text-secondary- " >{data.titleUS}</h2>
                    <div id="us-container-contentcard" className="flex desktop:flex-row w-auto justify-center items-center px-8 mobile-sm:flex-col" >
                    <img className="w-80 rounded-lg pt-2 pr-4" src={data.imgUs} alt="imagen de mujer ejecutiva" />
                        <p id="us-description" className="  w-auto text-norml py-4 px-0 text-lg mobile-sm:text-md">
                        {data.descriptionUs}
                        </p>
                    
                    </div>
                    </div>
                ))}
        </section>
        </>

    );
}

export { UsSection }