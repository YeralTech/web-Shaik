import React from "react";

const ButtonContact = () => {
    

    return(
        <>
            <button className="w-48 bg-secondary-primary px-4 py-2 rounded-xl text-primary-background text-base cursor-pointer shadow-md hover:bg-secondary-hover">Contacta un Asesor</button>
        </>

    )
}


const ButtonNavBar = () => {
        const sendWhatsapp = () => {
          const phoneNumber = '+50760745606';
          const whatsappUrl = `https://wa.me/${phoneNumber}`;
          window.open(whatsappUrl, '_blank');
        }
    return(
        <>
            <button className="animate-bounce  w-32 bg-secondary-primary px-4 py-2 rounded-xl text-primary-background text-base cursor-pointer shadow-md hover:bg-secondary-hover" onClick={sendWhatsapp}>¡Cotiza ya!</button>
        </>
        
    )
}


export { ButtonContact, ButtonNavBar }