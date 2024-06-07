import React, { useState } from "react"
import imgMain from '../../asset/dinero-min.png'
import secondImgMain from '../../asset/ejecutivo-dinero-min.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const MainSection = () => {
    const [changeBanner, setChangeBanner] = useState(false)

    const defaultBanner = {
        img: imgMain,
        title: '¡Asesoría Gratuita!',
        subTitle: 'Solicita tu Préstamo Personal',
        background: 'bg-primary-primary text-secondary-light'
    };

    const alternateBanner = {
        img: secondImgMain,  
        title: 'Mejora tu APC, Consolida tus deudas',
        subTitle: '¡Cotiza ya!',
        background: 'bg-primary-bg text-secondary-light'
    };

    const bannerData = changeBanner ? alternateBanner : defaultBanner;

    const toggleChangeBanner = () => {
        setChangeBanner(!changeBanner)
    }

    return (
        <section className={`main-section flex justify-center items-center py-1 w-full px-4 ${bannerData.background} h-auto`}>
            <IoIosArrowBack className="text-primary-light text-2xl" onClick={toggleChangeBanner} />
           
            <div className="main-container flex justify-center items-center max-w-screen-lg w-full text-primary-primary pointer py-1">
                <img className="w-2/6 h-auto" src={bannerData.img || imgMain} alt="dinero"/>  
                <div className="main-text-container flex flex-col justify-center items-center w-1/2 text-primary-light">
                    <h1 className="text-4xl font-bold text-primary-yellow py-4">{bannerData.title}</h1>
                    <p className="text-xl pt-2 font-semibold">{bannerData.subTitle}</p>
                    <p className="text-xl py-2 pb-6"></p>
                    <button className="bg-primary-yellow mt-2 text-primary-background text-md w-60 py-2 px-4 rounded-xl">Contacta un Asesor</button>
                </div>
            </div>

            <IoIosArrowForward className="text-primary-light text-2xl" onClick={toggleChangeBanner} />
        </section>
    );
}

export { MainSection };
