import React from "react";




const WhatsApp = () => {
  const sendWhatsapp = () => {
    const phoneNumber = '+50763655512';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
    window.open(whatsappUrl, '_blank')
  }

 return(
  <>
  <button onClick={sendWhatsapp} className="contact-button bg-blue-500 py-2 px-4 rounded-xl text-white"> WhatsApp</button>
  
  </>
 )
}

export { WhatsApp };
