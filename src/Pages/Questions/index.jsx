import React, { useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { BreadCrumb } from 'primereact/breadcrumb';
import { IoHome } from "react-icons/io5";
import questionsImg from '../../asset/question-icons.png'



const Questions  = () => {
    const [tabs] = useState([
        {
            header: '¿Qué documentos necesitas para un préstamo personal?',
            children: <p className="m-2 pb-2 text-primary-background font-normal">Necesitas documentos que comprueben tu identidad, como cedula, carta de trabajo y talonario o comprobante de pago. recibo de utilidad (luz, internet, agua) son los más frecuentes</p>
        },
        {
            header: '¿Trabajan con empresas de otros países o promotores de otros países?',
            children: <p className="m-0 pb-2 text-primary-background font-normal">NO, nosotros brindamos una asesoria 100% gratis, no se pide polizas ni dinero por el servicio </p>
        },
        {
            header: '¿Debo pagar una poliza o algo por el tramite con SHAIK ASESORES?',
            children: <p className="m-0 pb-2 text-primary-background font-normal">NO, nosotros brindamos una asesoria 100% gratis, no se pide polizas ni dinero por el servicio </p>
        }
    ]);

    const createDynamicTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <AccordionTab className="mb-4 bg-secondary-disable px-6 py-4 rounded-md text-primary-background font-medium " key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };
    const items = [ { label: 'Preguntas Frecuentes', url: '/' }]

    const home = { icon: <IoHome />, url: '/' }

    return (
        <>
            <BreadCrumb model={items} home={home} className="flex text-primary-primary px-8  my-6  w-2/4 h-8 justify-center" />
            <section className="question-section flex flex-col justify-center items-center w-auto h-auto px-10 pb-20 gap-6">
              <div className="question-container flex flex-col py-10 px-40">
                    <div className="title-container bg-secondary-primary  w-auto px-10 py-4 text-center rounded mb-10 ">
                        <h1 className="text-3xl text-primary-primary font-semibold">Preguntas Frecuentes</h1>
                    </div> 
                    <div className="flex gap-10">
                        <div>
                             <img className="w-64" src={questionsImg} alt="" />
                        </div>
                        <div className="card gap-2 w-96 py-8  w-1/2 pb-2 " >
                         <Accordion>{createDynamicTabs()}</Accordion>
                        </div>
                    </div>
                   
              </div>
               
            </section>
        </>
    )
}

export { Questions };