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
            descriptionUs: 'Contamos con más de 30 años de experiencia. Colaboramos con todas las instituciones crediticias para ayudarte a mejorar tu historial crediticio, obtener tu primer crédito y acceder a préstamos con garantías hipotecarias. Confía en nosotros para tus necesidades financieras, ¡estamos aquí para ayudarte a alcanzar tus objetivos!',
            imgUs: misionImg
        },
        {
            titleUS: 'Vision',
            descriptionUs: ' Nos dedicamos apasionadamente a servir a nuestros clientes con excelencia, priorizando la satisfacción de sus necesidades y la resolución de sus desafíos financieros. Lo hacemos con un compromiso inquebrantable con la confianza y la responsabilidad, guiándonos por nuestros valores fundamentales en cada interacción.',
            imgUs: visionImg
        },
    ]
    const items = [
        { label: 'Nosotros', url: '/' },
      
    ];

    const home = { icon: <IoHome />, url: '/' };
    return (
        <> 
      { /*     <div className="main-container flex justify-center items-center w-auto text-primary-primary">
                <img  className="w-auto 
                        h-auto z-0" 
                    src={bannerUs} alt="dinero"/>  
            </div> */}

            <BreadCrumb model={items} home={home} className=" flex text-primary-primary px-10 my-6 gap-4 " />
            <section className="flex flex-col justify-center items-center w-auto h-auto px-10 py-10  gap-10">
                <h1 className="text-4xl font-bold text-primary-background">Nosotros</h1>
                {usData.map((data, index) => (
                    <div className="flex flex-col justify-center  items-center py-8  max-w-screen-lg w-full  rounded text-primary-background  shadow-lg bg-secondary-light" key={index}>
                    <h2 className="text-2xl font-semibold " >{data.titleUS}</h2>
                    <div className="flex w-auto justify-center items-center px-8" >
                    <img className="w-80 rounded-lg" src={data.imgUs} alt="imagen de mujer ejecutiva" />
                        <p className="  w-3/4 text-justify px-10 text-lg">
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