import React, { useState } from "react";
import privadaIcon from '../../asset/privada-icon-min.png';
import govIcon from '../../asset/gov-icon-min.png';
import policeIcon from '../../asset/police-icon-min.png';
import saludIcon from '../../asset/doctor-icon-min.png';
import jubiIcon from '../../asset/jubi-icon (2)-min.png';
import teacherIcon from '../../asset/teache-icon-min.png';
import acpIcon from '../../asset/acp-icon-min.png';
import Modal from '../Modal'


const ApplySection = () => {
  const applyData = [
    { 
        applyIcon: privadaIcon, 
        applyTitle: 'Empresa Privada', 
        description: 'Aplicas desde los 4 meses permanente',
        requisitos: 'Carta de trabajo, ficha CSS, comprobante de pago, cédula',
    },
    { 
        applyIcon: govIcon, 
        applyTitle: 'Gobierno', 
        description: 'Aplican recién nombrados, permanente o eventual',
        requisitos: 'Proforma, talonario, cédula'
    },
    { 
        applyIcon: policeIcon, 
        applyTitle: 'Fuerza Publica', 
        description: 'Aplican recién nombrados. Consolidamos cuentas y cancelamos embargo.',
        requisitos: 'Proforma, talonario, cédula'
    },
    { 
        applyIcon: saludIcon, 
        applyTitle: 'Profesionales de la salud',
        description: 'Hasta $80,000.00 y hasta 25 años de plazo. Cancelamos embargos y consolidamos tus cuentas.',
        requisitos: 'Carta de trabajo, ficha CSS, comprobante de pago'
    },
    { 
        applyIcon: jubiIcon, 
        applyTitle: 'Jubilados y Pensionados', 
        description: ' Sin exámen médico y sin cancelar cuentas atrasadas!. Con plazos hasta los 85 años.',
        requisitos: 'Talonario, cédula'
    },
    { 
        applyIcon: teacherIcon,
        applyTitle: 'Educadores', 
        description: 'Hasta $80,000.00 y hasta 25 años de plazo. Cancelamos embargos y consolidamos tus cuentas.',
        requisitos: 'Carta de trabajo, ficha CSS, comprobante de pago, cédula'
    },
    { 
        applyIcon: acpIcon, 
        applyTitle: 'Empleados de la ACP', 
        description: 'Aplicas si eres eventual o permanente, recibes hasta $80,000.00.',
        requisitos: 'Carta de trabajo, ficha CSS, comprobante de pago'
    },
  ];

  const [modalIsOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const toggleViewApplyDetails = (data) => {
    setSelectedData(data);
    setModalOpen(!modalIsOpen);
  };

  return (
    <>
      <section id="apply-section" className="flex flex-col justify-center items-center w-full px-20 py-20 h-auto bg-primary-white">
        <h1 id="apply-title" className="text-4xl font-bold text-primary-primary pb-8 text-center">Quienes Aplican</h1>
        <div id="apply-container" className=" flex gap-2 pb-6 w-auto justify-center items-center max-w-screen-lg h-auto flex-wrap">
          {applyData.map((data, index) => (
            <div id="apply-container-icon"
              className="flex flex-col py-2 items-center text-primary-background w-32 h-52 text-center rounded-lg cursor-pointer hover:bg-primary-bg hover:shadow-lg hover:h-52"
              key={index}
              onClick={() => toggleViewApplyDetails(data)}
            >
              <img id="icon-img" className="w-auto h-24 pt-2 px-2 object-contain drop-shadow-xl shadow-primary-background " src={data.applyIcon} alt={data.applyTitle} />
              <p className="px-6 pt-4 text-primary-primary font-semibold text-lg w-30 text-center">{data.applyTitle}</p>
  
            </div>
          ))}
    
        </div>
        <Modal isOpen={modalIsOpen} onClose={() => setModalOpen(false)}>
          {selectedData && (
            <>
            <div id="modal-container " className="flex flex-col justify-center items-center py-10 h-auto ">
            <img id="modal-img" className="w-auto h-24 pt-2 z-50 absolute top-2 object-contain" src={selectedData.applyIcon} alt={selectedData.applyTitle} />
            <div id="modal-container-text" className="bg-primary-light px-10 py-10 rounded text-center shadow-lg">
            <h2 className="text-2xl font-bold text-primary-primary pt-6">{selectedData.applyTitle}</h2>
              <p className="text-primary-primary text-base pt-1 px-">{selectedData.description}.</p>
      
     
              <div id="modal-container-requisites" className="text-base mt-8  px-2 py-1 rounded bg-primary-primary ">
              <p className="text-primary-light  px-4 py-1 rounded-md"> <strong> Requisitos:</strong> {selectedData.requisitos}</p> 
            </div>
             
              </div>
        
            </div>
            </>
          )}
        </Modal>
      </section>
    </>
  );
};

export { ApplySection };
