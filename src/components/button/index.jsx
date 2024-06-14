import React from "react";

const ButtonContact = () => {
    return(
        <>
            <button className="w-48 bg-secondary-default px-4 py-2 rounded-xl text-sencondary-background text-base cursor-pointer shadow-md hover:bg-secondary-primary">Contacta un Asesor</button>
        </>

    )
}


const ButtonNavBar = () => {
    return(
        <>
            <button className="animate-bounce  w-32 bg-secondary-default px-4 py-2 rounded-xl text-sencondary-background text-base cursor-pointer shadow-md hover:bg-secondary-primary">¡Cotiza ya!</button>
        </>
        
    )
}


export { ButtonContact, ButtonNavBar }