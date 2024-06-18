import React from "react";
import formImg from '../../asset/portrait-young-businesswoman-talking-telephone-looking-camera.jpg'

const ContactForm = () => {
    return(
        <section className="w-auto flex flex-col justify-center items-center bg-primary-background py-10">
            <h1 className="text-4xl font-semibold text-primary-light px-8 py-4">Comunícate con Nosotros</h1>
                <div className="w-auto flex justify-center  items-center py-10 gap-20 max-w- screen-full">  
                    <div  className=" w-auto flex flex-col justify-center  items-center text-center">
                    <img className="w-96 rounded-lg " src={formImg} alt="Hombre ejecutivo de atencion al cliente con dinero en la mano" />
                    <p className="text-md  text-primary-light bg-primary-background px-8 py-4">Completa el formulario para solicitar información.</p>
                    </div>
                    <form className="w-96 h-auto flex flex-col justify-center px-10  py-6 gap-1  text-base shadow-xl bg-secondary-disable rounded-md">
                    <h2 className="text-primary-primary font-semibold text-2xl text-center pb-4 ">Contáctanos</h2>
                    <label className="text-primary-primary" htmlFor="">Nombre</label>
                    <input className="border rounded-md p-2 text-secondary-light mb-2" type="text" placeholder="Yeraldin Espinosa" />
                    <label className="text-primary-primary"  htmlFor=" ">Celular</label>
                    <input className="border rounded-md p-2 text-secondary-light mb-2" type="text" placeholder="0000-0000" />
                    <label className="text-primary-primary" htmlFor="">Email</label>
                    <input className="border rounded-md p-2 text-secondary-light mb-2" type="email" placeholder="tuemail@email.com" />
                    <label className="text-primary-primary"  htmlFor="">Cuentanos tu caso</label>
                    <input className="border rounded-md p-2 text-secondary-light h-20 mb-4" type="text" placeholder="Mensaje" />
                    <button className="w-24 bg-secondary-primary px-4 py-2 rounded-xl text-primary-background text-base cursor-pointer shadow-md hover:bg-secondary-hover ">Enviar</button>
                </form>
            </div>
        </section>
       
       
    )
}

export { ContactForm}