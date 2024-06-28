import React from "react";

const ButtonContact = () => {
    const sendWhatsapp = () => {
        const phoneNumber = '+50760745606';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
      }

    return(
        <>
            <button id="whastapp-button" className="w-auto bg-secondary-primary px-8 py-2 rounded-xl text-primary-background text-base cursor-pointer shadow-md hover:bg-secondary-hover" onClick={sendWhatsapp}>¡Aplica ya!</button>
        </>

    )
}



export { ButtonContact}