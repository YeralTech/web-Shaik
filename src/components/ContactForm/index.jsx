import React from "react";
import formImg from '../../asset/Atenncion al cliente-min.png'

const ContactForm = () => {
    return(
        <section className="w-auto flex flex-col justify-center items-center">
            <div className="w-auto flex  justify-center  items-center py-20 gap-8 ">
            <img className="w-2/4" src={formImg} alt="" />
         <form className="w-96 h-auto flex flex-col justify-center px-8  py-4 gap-2 text-primary-light text-base shadow-xl bg-primary-background rounded-md">
         <h1 className="font-semibold text-3xl text-center pb-4 ">Contáctanos</h1>
            <label htmlFor="">Nombre</label>
            <input className="border rounded-md p-2" type="text" placeholder="Yeraldin Espinosa" />
            <label htmlFor="border rounded-md p-2">Celular</label>
            <input className="border rounded-md p-2" type="text" placeholder="0000-0000" />
            <label htmlFor="">Email</label>
            <input className="border rounded-md p-2" type="email" placeholder="tuemail@email.com" />
            <label htmlFor="">Cuentanos tu caso</label>
            <input className="border rounded-md p-2 h-40" type="text" placeholder="Mensaje" />

         </form>
        </div>
        </section>
       
       
    )
}

export { ContactForm}