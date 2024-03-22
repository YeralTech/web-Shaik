import React from "react";



const WhatsApp = () => {
  const sendWhatsapp = () => {
    const phoneNumber = '+50763655512';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
    window.open(whatsappUrl, '_blank')
  }

 return(
  <button onClick={sendWhatsapp} className="contact-button"> WhatsApp</button>

 )
}

export { WhatsApp };
