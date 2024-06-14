import React from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const ProcessSection = () => {

    const processData = [
        {
            iconTitle: <FaClipboardCheck />,
            processTitle: 'Evaluación',
            processDescription: 'Una vez te contactes con nuestros asesores, te realizarán ciertas preguntas y procederán a solicitarte los documentos para un breve análisis.'
        },
        {
            iconTitle: <IoDocumentTextSharp />,
            processTitle: 'Cotización',
            processDescription: 'Una vez analizado su caso, procederemos a cotizar con todos nuestros aliados financieros para luego enviarte la mejor propuesta en base a tu perfil y necesidad.'
        },
        {
            iconTitle: <FaSackDollar />,
            processTitle: 'Desembolso',
            processDescription: 'Una vez te contactes con nuestros asesores, te realizarán ciertas preguntas y procederán a solicitarte los documentos para un breve análisis.'
        },
    ];

    return (
        <section className="flex flex-col justify-center items-center w-full px-8 py-8 h-auto bg-primary-background">
            <h1 className="text-4xl font-bold text-primary-light py-12 ">Nuestro Proceso</h1>
            <div className="process-section-container grid grid-cols-1 gap-6 p-4 max-w-screen-lg w-full md:grid-cols-2 lg:grid-cols-3">
                {processData.map((data, index) => (
                    <div className="process-container  bg-primary-white text-primary-background p-8 w-full h-auto rounded-lg shadow-md" key={index}>
                        <h2 className="title flex gap-1 items-center text-2xl font-semibold pb-4"> {data.iconTitle} {data.processTitle}</h2>
                        <p>{data.processDescription}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { ProcessSection }
