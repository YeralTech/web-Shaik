import React from "react";
import './style.css'
import './mobile.css'

/**
 * Componente que muestra las categorías de personas que pueden aplicar.
 */
const Services = () => {
    const servicesData = [   
        { company: 'Préstamos Personales' }, 
        { company: 'Consolidación de cuentas' },
        { company: 'Préstamos con Garantia de Hipotecas' },
        { company: 'Préstamos para MicroEmpresarios' }, 
    ];

    return (
        <>
            <section className="service-Section">
                <h1> ¡Nosotros te Ayudamos!</h1>
                <p className="services-SubTitle">Te ofrecemos un servicio 100% personalizado, te asesoraremos para que logres tus sueños.</p>
                <div className="service-container">
                    {servicesData.map((data, index) => (
                        <div className="service" key={index}>
                            <p>{data.company}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export { Services };
