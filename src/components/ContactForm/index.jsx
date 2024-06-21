import React, { useState } from "react";
import formImg from '../../asset/portrait-young-businesswoman-talking-telephone-looking-camera.jpg'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const [errors, setErrors] = useState({});

      const validate = () => {
        let tempErrors = {};
        let isValid = true;
      
        if (!formData.name) {
          tempErrors.name = 'El nombre es requerido';
          isValid = false;
        }
      
        if (!formData.phone) {
          tempErrors.phone = 'El número de celular es requerido';
          isValid = false;
        } else if (!/^\d{4}-\d{4}$/.test(formData.phone)) {
          tempErrors.phone = 'El formato del número de celular es incorrecto (0000-0000)';
          isValid = false;
        }
      
        if (!formData.email) {
          tempErrors.email = 'El correo electrónico es requerido';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors.email = 'El correo electrónico no es válido';
          isValid = false;
        }
      
        if (!formData.message) {
          tempErrors.message = 'El mensaje es requerido';
          isValid = false;
        }
      
        setErrors(tempErrors);
        return isValid;
      };
      
   
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert('Datos del formulario enviados:', formData);
          // Aquí puedes agregar la lógica para enviar los datos al servidor
        } else {
          console.log('Errores en el formulario:', errors);
        }
      };
      

    return(
        <section className="w-auto flex flex-col justify-center items-center bg-secondary-default py-10">
            <h1 className="text-4xl font-semibold text-primary-background px-8 py-4">Comunícate con Nosotros</h1>
                <div className="w-auto flex justify-center  items-center py-10 gap-20 max-w- screen-full">  
                    <div  className=" w-auto flex flex-col justify-center  items-center text-center">
                    <img className="w-96 rounded-lg " src={formImg} alt="Hombre ejecutivo de atencion al cliente con dinero en la mano" />
                    <p className="text-md  text-primary-light bg-primary-background px-8 py-4 rounded-lg">Completa el formulario para solicitar información.</p>
                    </div>
                    
                    <form className=" contact-form w-96 h-auto flex flex-col justify-center px-10  py-6 gap-2  text-base shadow-xl bg-primary-background rounded-md" onSubmit={handleSubmit}>
                    <h2 className="text-primary-light font-semibold text-2xl text-center pb-4 ">Contáctanos</h2>
                    <label className="text-primary-light" htmlFor="name">Nombre</label>
                    <input 
                        className="input-name border rounded-md p-2 text-secondary-light" 
                        type="text" 
                        placeholder="Yeraldin Espinosa"  
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                        {errors.name && <p className="text-primary-error text-xs mb-3">{errors.name}</p>}
                    <label className="text-primary-light"  htmlFor=" phone">Celular</label>
                    <input 
                        className=" input-phone border rounded-md p-2 text-primary-primary" type="text" 
                        placeholder="0000-0000"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} 
                        />
                        {errors.phone && <p className="text-primary-error text-xs mb-3">{errors.phone}</p>}
                    <label className="text-primary-light" htmlFor="email">Email</label>
                    <input 
                        className="input-email border rounded-md p-2 text-secondary-light" type="email" 
                        placeholder="tuemail@email.com" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className="text-primary-error text-xs mb-3">{errors.email}</p>}
                    <label className="text-primary-light"  htmlFor="message">Cuentanos tu caso</label>
                    <input 
                        className="input-message border rounded-md p-2 h-20 text-primary-primary" type="text" 
                        placeholder="Mensaje" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        />

                    {errors.message && <p className="text-primary-error text-xs mb-3">{errors.message}</p>}
                    <button className="w-24 bg-secondary-primary px-4 py-2 rounded-xl text-primary-background text-base cursor-pointer shadow-md hover:bg-secondary-hover ">Enviar</button>
                </form>
            </div>
        </section>  
    )
}

export { ContactForm}