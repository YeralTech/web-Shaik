import React from "react";
import logoFooter from '../../asset/logo-white.png'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";


const Footer = () => {
    return(
        <>
         <section className=" flex w-full  justify-around items-center bg-primary-background text-primary-light py-6 pt-10"> 
            <div className=" flex flex-col max-w-screen-xl  h-auto w-auto   text-primary-light  justify-center items-center">
                <img className="w-40" src={logoFooter} alt="logoShaik asesores en blanco" />
                <p className="text-sm ">Panamá, Ciudad de Panamá</p>
            </div>
            <div className="flex flex-col w-auto py-2 justify-center items-center">
                <p className="text-secondary-primary font-semibold text-lg w-auto">Síguenos en Redes Sociales</p>
            <div className="flex w-20 text-center py-2 justify-center  ">
                <AiFillInstagram className=" w-24 h-8 "/>
                <BsFacebook  className=" w-24 h-8" />
            </div>

            </div>
        </section>
            <div className="py-2 flex flex-col py-4 items-center  w-auto h-auto bg-primary-background text-primary-light justify-center border-t border-solid border-primary-light"> 
                <p className="text-base">Copyright © 2024 Shaik Asesores. Todos los derechos reservados.</p>
                <p className="text-xs py-1">Diseñada y Desarrollada por: Yeraldin Espinosa </p>
           </div>
           
        </>
       
       
    )
}

export { Footer }