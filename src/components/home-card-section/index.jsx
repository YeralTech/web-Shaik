import React from "react";
import executiveImg from '../../asset/happy-caucasian-woman-shaking-hands-with-latin-man-during-business-meeting-with-lawyer-manager-hiring-beautiful-professional-woman-new-job-min.jpg'
import { ButtonContact } from "../button";

const FinancialCompaniesSection = () => {
    return(

        <section className="flex flex-col w-auto h-auto justify-center items-center px-20 py-20 text-primmary-primary">
            <div className="flex justify-center max-w-screen-lg w-full ">
                <img className="w-96 rounded-md" src={executiveImg} alt="" />
                <div className="w-1/2 px-10 py-10">
                    <h1 className="text-3xl font-bold pb-6">Somos tus Aliados</h1>
                    <p className="text-md pb-6">Trabajamos con diversas entidades Financieras y Bancarias de Panamá, No solicitamos ningún tipo de pago o póliza. Nuestros servicios son 100% GRATIS.</p>
                    
                <ButtonContact/>
                </div>
            </div>
        </section>
    )
}

export {FinancialCompaniesSection}