import React, { useState } from "react";
import formImg from '../../asset/portrait-young-businesswoman-talking-telephone-looking-camera.jpg';
import axios from 'axios';
import Modal from "../Modal";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [salary, setSalary] = useState('');
  const [job, setJob] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalOpen] = useState(false);


  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!name) {
      tempErrors.name = "El nombre es requerido";
      isValid = false;
    }

    if (!phone) {
      tempErrors.phone = "El número de celular es requerido";
      isValid = false;
    } else if (!/^\d{8}$/.test(phone)) {
      tempErrors.phone = "Escribe tu número de celular sin guión (00000000)";
      isValid = false;
    }

    if (!message) {
      tempErrors.message = "Complete los datos requeridos";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const data = { Name: name, Phone: phone, Salary: salary, Message: message, Job: job, Time: time };

      try {
        const response = await axios.post('https://sheet.best/api/sheets/5a287589-fcbd-46e6-b5ee-e29d4eaa59db', data, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log(response.data);
        setName('');
        setPhone('');
        setSalary('');
        setMessage('');
        setJob('');
        setTime('');
        setModalOpen(true);
      } catch (error) {
        console.error('Error al enviar el formulario', error);
      }
    }
  };

  return (
    <section className="w-auto flex flex-col justify-center items-center py-20">
      <h1 className="text-4xl font-semibold text-primary-primary px-10 py-4">Comunícate con Nosotros</h1>
      <div className="w-auto desktop:flex-row flex justify-center items-center py-10 px-10 gap-20 max-w-screen-full mobile-sm:flex-col mobile-sm:px-20">
        <div className="w-auto flex flex-col justify-center items-center text-center px-8">
          <img className="desktop:w-96 rounded-lg mobile-sm:w-60" src={formImg} alt="Hombre ejecutivo de atención al cliente con dinero en la mano" />
          <p className="text-md text-primary-white bg-primary-hover px-2 py-4 rounded-lg mobile-sm:px-2">Completa el formulario para solicitar información.</p>
        </div>
        <form className="contact-form desktop:w-96 h-auto flex flex-col justify-center px-10 py-6 gap-2 text-base shadow-xl bg-primary-hover rounded-md mobile-sm:w-60 mobile-sm:px-6" onSubmit={handleSubmit}>
          <h2 className="text-primary-white font-semibold text-2xl text-center pb-4">Contáctanos</h2>
          <label className="text-primary-light" htmlFor="name">Nombre</label>
          <input
            className="input-name border rounded-md p-2 text-secondary-light"
            type="text"
            placeholder="Tu nombre"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && <p className="text-primary-error text-xs mb-3">{errors.name}</p>}
          <label className="text-primary-white" htmlFor="phone">Celular</label>
          <input
            className="input-phone border rounded-md p-2 text-primary-primary"
            type="text"
            placeholder="00000000"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          {errors.phone && <p className="text-primary-error text-xs mb-3">{errors.phone}</p>}
          <label className="text-primary-light" htmlFor="salary">Salario Mensual</label>
          <input
            className="input-email border rounded-md p-2 text-primary-primary"
            type="text"
            placeholder="$000.00"
            name="salary"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
          />
          <label className="text-primary-light" htmlFor="job">¿Dónde labora?</label>
          <input
            className="input-job border rounded-md p-2 text-primary-primary"
            type="text"
            placeholder="Nombre de la empresa"
            name="job"
            onChange={(e) => setJob(e.target.value)}
            value={job}
          />
          <label className="text-primary-light" htmlFor="time">¿Tiempo en el empleo?</label>
          <input
            className="input-ageWork border rounded-md p-2 text-primary-primary"
            type="text"
            placeholder="Tiempo de servicio"
            name="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          {errors.message && <p className="text-primary-error text-xs mb-3">{errors.message}</p>}
          <label className="text-primary-light" htmlFor="message">Cuéntanos tu caso</label>
          <input
            className="input-message border rounded-md p-2 h-20 text-primary-primary"
            type="text"
            placeholder="Mensaje"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {errors.message && <p className="text-primary-error text-xs mb-3">{errors.message}</p>}
          <button id="form-button" className="form-button w-24 bg-secondary-primary px-4 py-2 mt-2 rounded-xl text-primary-primary text-base cursor-pointer shadow-md hover:bg-secondary-hover">Enviar</button>
        </form>
      </div>
        <Modal isOpen={modalIsOpen} onClose={() => setModalOpen(false)}>
          <div className="modal-container flex flex-col justify-center items-center py-12 px-10 rounded-md h-auto bg-primary-hover">
            <FaEnvelopeCircleCheck className="text-primary-white text-9xl pb-8" />
            <p className="text-primary-light text-center text-md">Tus datos se han enviado correctamente, te estaremos contactando en un período de aproximadamente 24 horas</p>
          </div>
        </Modal>
    </section>
  );
};

export default ContactForm;
