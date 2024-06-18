import React from "react";
import usImg from '../../asset/Atenncion al cliente-min.png'
import misionImg from '../../asset/shoot.png'
import bannerUs from '../../asset/banner-nosotros.png'

const UsSection = () => {
    return (
        <> 
       
            <div className="main-container flex justify-center items-center w-auto text-primary-primary">
                <img 
                    className="w-auto h-auto z-0" 
                    src={bannerUs} alt="dinero"/>  
                               
              
        
            </div>

    
                <section className="flex flex-col justify-center items-center w-auto h-auto px-10 py-20  gap-8">
            <div className="flex  justify-center items-center pt-2 gap-2 max-w-screen-lg w-full bg-primary-background rounded-lg shadow-lg " >
                
                <p className="text-lg text-primary-light   w-2/4 text-justify py-4  ">
                    Contamos con más de 30 años de experiencia. <br />
                    Colaboramos con todas las instituciones crediticias para ayudarte a mejorar tu historial crediticio, obtener tu primer crédito y acceder a préstamos con garantías hipotecarias. Confía en nosotros para tus necesidades financieras, ¡estamos aquí para ayudarte a alcanzar tus objetivos!
                </p>
                <img className="w-80" src={usImg} alt="imagen de mujer ejecutiva" />
            </div>
            <div className="flex flex-col justify-center  items-center py-10 gap-2 max-w-screen-lg w-full  rounded text-primary-background  bg-primary-light shadow-lg">
            <h2 className="text-3xl font-semibold text-left px-1 ">  Misión</h2>
            <div className="flex w-auto justify-center items-center " >
            <img className="w-40" src={misionImg} alt="imagen de mujer ejecutiva" />
                <p className="  w-3/4 text-justify px-20 text-lg">
                Nos dedicamos apasionadamente a servir a nuestros clientes con excelencia, priorizando la satisfacción de sus necesidades y la resolución de sus desafíos financieros. Lo hacemos con un compromiso inquebrantable con la confianza y la responsabilidad, guiándonos por nuestros valores fundamentales en cada interacción.
                </p>
               
            </div>
            </div>
            <div className="flex flex-col justify-center  items-center py-10 gap-2 max-w-screen-lg w-full  rounded text-primary-light bg-primary-background rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-left px-1 ">Visión</h2>
            <div className="flex w-auto justify-center items-center " >
            
                <p className="  w-3/4 text-justify px-10 text-lg">
                Nos dedicamos apasionadamente a servir a nuestros clientes con excelencia, priorizando la satisfacción de sus necesidades y la resolución de sus desafíos financieros. Lo hacemos con un compromiso inquebrantable con la confianza y la responsabilidad, guiándonos por nuestros valores fundamentales en cada interacción.
                </p>
                <img className="w-40" src={misionImg} alt="imagen de mujer ejecutiva" />
            </div>
            </div>
               
        </section>
        </>

    );
}

export { UsSection }