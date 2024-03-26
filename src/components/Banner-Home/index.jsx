import React from 'react';

import asesorImg from '../../asset/atencion-min.png';
import './style.css';
import './mobile.css';

const Banner = () => {
    return (
        <>
       
            <div className="banner-Container">
                <img className='banner-img' src={asesorImg} alt="" />
                <div className='textBanner-Container'>
                    <p className="animated-text">
                        Shaik Asesores Panamá no solicita ningún tipo de pago o póliza. Nuestros servicios son 100% GRATIS.
                    </p>
                </div>
            </div>
        </>
    );
}

export { Banner };
