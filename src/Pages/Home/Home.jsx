import React from "react";
import { MainSection } from "../../components/Main-section/Main-section";
import { ProcessSection } from "../../components/Process-Section";
import { ApplySection } from "../../components/Apply-section";


const Home = () => {
    return(
        <>
           <MainSection/>
           <ApplySection/>
           <ProcessSection/>

        </>
    
    )

}

export { Home}