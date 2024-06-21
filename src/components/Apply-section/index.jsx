import React, { useState } from "react";
import privadaIcon from '../../asset/privada-icon.png';
import govIcon from '../../asset/gov-icon.png';
import policeIcon from '../../asset/police-icon.png';
import saludIcon from '../../asset/doctor-icon.png';
import jubiIcon from '../../asset/jubi-icon (2).png';
import teacherIcon from '../../asset/teache-icon.png';
import acpIcon from '../../asset/acp-icon.png';
import Modal from '../Modal/index';

const ApplySection = () => {
  const applyData = [
    { 
        applyIcon: privadaIcon, 
        applyTitle: 'Empresa Privada', 
        description: 'Aplicas desde los 4 meses permanente.'
    },
    { 
        applyIcon: govIcon, 
        applyTitle: 'Gobierno', 
        description: 'Aplican recién nombrados, permanente o eventual'
    },
    { 
        applyIcon: policeIcon, 
        applyTitle: 'Fuerza Publica', 
        description: 'Aplican recién nombrados. Consolidamos cuentas y cancelamos embargo.'
    },
    { 
        applyIcon: saludIcon, 
        applyTitle: 'Profesionales de la salud',
        description: 'hasta $80,000.00 y hasta 25 años de plazo. Cancelamos embargos y consolidamos tus cuentas..'
    },
    { 
        applyIcon: jubiIcon, 
        applyTitle: 'Jubilados y Pensionados', 
        description: ' Sin exámen médico y sin cancelar cuentas atrasadas!. Con plazos hasta los 85 años.'
    },
    { 
        applyIcon: teacherIcon,
        applyTitle: 'Educadores', 
        description: 'hasta $80,000.00 y hasta 25 años de plazo. Cancelamos embargos y consolidamos tus cuentas.'
    },
    { 
        applyIcon: acpIcon, 
        applyTitle: 'Empleados de la ACP', 
        description: 'Aplicas si eres eventual o permanente, recibes hasta $80,000.00.'
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
      <section className="flex flex-col justify-center items-center w-full px-20 py-20 h-auto bg-primary-white">
        <h1 className="text-4xl font-bold text-primary-background pb-8">Quienes Aplican</h1>
        <div className="flex flex-wrap w-1/2  gap-2 justify-center items-center max-w-screen-lg h-auto  ">
          {applyData.map((data, index) => (
            <div
              className="flex flex-col py-2 items-center text-primary-background  w-24 h-40 text-center rounded-lg cursor-pointer hover:bg-secondary-light hover:shadow-md"
              key={index}
              onClick={() => toggleViewApplyDetails(data)}
            >
              <img className="w-auto h-20 pt-2 px-2 object-contain drop-shadow-lg shadow-primary-background " src={data.applyIcon} alt={data.applyTitle} />
              <p className="px-6 pt-4  font-semibold text-sm w-30 text-center">{data.applyTitle}</p>
            </div>
          ))}
        </div>
        <Modal isOpen={modalIsOpen} onClose={() => setModalOpen(false)}>
          {selectedData && (
            <>
            <div className="flex flex-col justify-center items-center py-10  ">
            <img className="w-auto h-20 pt-2 mb-2 object-contain" src={selectedData.applyIcon} alt={selectedData.applyTitle} />
              <h2 className="text-2xl font-bold text-primary-light">{selectedData.applyTitle}</h2>
              <p className="text-primary-light text-lg pt-2 px-">{selectedData.description}.</p>
            </div>
              
            </>
          )}
        </Modal>
      </section>
    </>
  );
};

export { ApplySection };
