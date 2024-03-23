import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import questionImg from '../../asset/mujer-dinero-min.png'
import './style.css'

const Questions = () => {
    // Estado para controlar si la pregunta está abierta o cerrada
    const [openIndex, setOpenIndex] = useState(null);

    const frequentQuestion = [
        {
            question: '¿Qué documentos necesitas para un préstamo personal?',
            answer: 'Necesitas documentos que comprueben tu identidad, como cedula, carta de trabajo y talonario o comprobante de pago. recibo de utilidad (luz, internet, agua) son los más frecuentes. ',
        },
        {
            question: '¿Debo pagar una poliza o algo por el tramite con SHAIK ASESORES?',
            answer: 'NO, nosotros brindamos una asesoria 100% gratis, no se pide polizas ni dinero por el servicio',
        },
        {
            question: '¿Trnbajan con empresas de otros países o promotores de otros países?',
            answer: 'No, SHAIK ASESORES solo trabaja a nivel nacional y con ejecutivos autorizados por los canales de contacto autorizados',
        },
        
        {
            question: '¿Porque trabajar con un asesor y cual es la confiabilidad de SHAIK ASESORES?',
            answer: 'Contamos con mas de 30 años de trayectoria, a través de asesorías gratuitas, nuestros asesores expertos han ayudado a mejorar la salud financiera de muchos clientes en todo Panamá. Logrando una efectividad en aprobación del 90% de los préstamos tramitados.',
        }
    ];

    // Función para manejar el click en la pregunta
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <>
        <section className="Question-Section">
          <h1 className="Question-Title">Preguntas Frecuentes</h1>
          <p className="question-text">   </p>
          <div className="questions-Container">
              {frequentQuestion.map((data, index)=> (
                  <div className="text-container" key={index}>
                      <h4 className="question" onClick={() => handleToggle(index)}>
                          {data.question} 
                          {openIndex === index ? 
                              <IoIosArrowUp className="arrowUp " /> :
                              <IoIosArrowDown className="arrowDown " />
                          }
                      </h4>
                      {openIndex === index && 

                          <p className="answer active">
                              <BsCheckCircleFill className="checkIcon" />
                              {data.answer}
                          </p>
                      }
                  </div>
              ))}
            
          </div>
          <img className="questionImg" src={questionImg} alt="Icono de empresa privada" />
        </section>
       </>
    );
}

export {Questions};
