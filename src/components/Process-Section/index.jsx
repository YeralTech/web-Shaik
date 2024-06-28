import React from "react";
import evaluationImg from '../../asset/evaluacion-icon.png'
import invoiceImg from '../../asset/cotizacion-icon.png'
import moneyImg from '../../asset/desembolso-icon.png'





const ProcessSection = () => {

    const processData = [
        {
            iconTitle: evaluationImg,
            processTitle: 'Evaluación',
            processDescription: 'Nuestros asesores te realizarán ciertas preguntas y procederán a solicitarte los documentos para un breve análisis.'
        },
        {
            iconTitle: invoiceImg,
            processTitle: 'Cotización',
            processDescription: 'Una vez analizado su caso, procedemos cotizar con todos nuestros aliados financieros, luego te enviaremos la cotización.'
        },
        {
            iconTitle: moneyImg,
            processTitle: 'Desembolso',
            processDescription: 'Luego de que escojas la mejor opción, procederemos a firmar la documentación requerida y en un par de días podrás retirar tu cheque en la sucursal asignada. '
        },
    ];

    return (
        <section className="flex flex-col justify-center items-center w-full px-8 py-20 h-auto bg-primary-hover">
                     
            <h1 className="text-4xl font-bold text-secondary-light pb-10 ">Nuestro Proceso</h1>
            <div className="process-section-container grid grid-cols-1 gap-8 p-4 max-w-screen-lg w-full md:grid-cols-2 lg:grid-cols-3  ">
               
                {processData.map((data, index) => (
                    <div className="process-container flex flex-col justify-center  items-center bg-primary-white text-primary-primary px-8 py-8 w-full h-auto rounded-lg shadow-lg shadow-primary-primary border-t-8 divide-solid border-secondary-hover" key={index}>

                        <img  className="drop-shadow-md w-40" src={data.iconTitle} alt="" />
                        <h2 className="title text-2xl font-bold py-4 "> {data.processTitle}</h2>
                        <p>{data.processDescription}</p>
                    </div>
                ))}
            </div>
 
        </section>
    );
}

export { ProcessSection }
