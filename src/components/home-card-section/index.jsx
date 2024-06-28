import React from "react";
import executiveImg from '../../asset/happy-caucasian-woman-shaking-hands-with-latin-man-during-business-meeting-with-lawyer-manager-hiring-beautiful-professional-woman-new-job-min-min.jpg'
import { ButtonContact } from "../button";

const FinancialCompaniesSection = () => {
    return(

        <section className="flex flex-col w-auto h-auto py-20 justify-center items-center px-20 py-20 text-primary-primary bg-secondary-light">
               <h1 className="text-4xl font-semibold pb-10 mobile-sm:text-center">Somos tus Aliados</h1>
            <div className="desktop:flex-row flex justify-center max-w-screen-lg w-auto mobile-sm:flex-col items-center h-auto ">
                <img className="w-96 rounded-md" src={executiveImg} alt="" />
                <div className="w-1/2 px-10 py-8 flex flex-col  justify-center items-center mobile-sm:w-auto ">
                 
                    <p className="text-lg text-normal pb-6">Trabajamos con diversas entidades Financieras y Bancarias de Panamá, No solicitamos ningún tipo de pago o póliza. Nuestros servicios son 100% GRATIS.</p>
                    
                <ButtonContact/>
                </div>
            </div>
        </section>
    )
}

export {FinancialCompaniesSection}