import React from "react";
import { MainSection } from "../../components/Main-section/Main-section";
import { ProcessSection } from "../../components/Process-Section";
import { ApplySection } from "../../components/Apply-section";
import { FinancialCompaniesSection } from "../../components/home-card-section";
import { ContactForm } from "../../components/ContactForm";


const Home = () => {
    return(
        <>
           <MainSection/>
           <ApplySection/>
           <ProcessSection/>
           <FinancialCompaniesSection/>
           <ContactForm/>

        </>
    
    )

}

export { Home}