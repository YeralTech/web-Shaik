import React, { useState } from "react"
import  secondImgMain from '../../asset/banner 1.png'
import imgMain from '../../asset/banner2.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const MainSection = () => {
    const [changeBanner, setChangeBanner] = useState(false)

    const defaultBanner = { img: imgMain }
    const alternateBanner = { img: secondImgMain };

    const bannerData = changeBanner ? alternateBanner : defaultBanner;

    const toggleChangeBanner = () => {
        setChangeBanner(!changeBanner)
    }

    return (
        <section className="main-section flex justify-center items-center w-auto h-auto">         
            <div className="main-container flex justify-center items-center w-auto text-primary-primary">
                <IoIosArrowBack 
                    className=" text-primary-yellow  text-4xl z-40 absolute left-5 cursor-pointer hover:bg-primary-yellow hover:text-primary-primary rounded" 
                    onClick={toggleChangeBanner} />
                <img 
                    className="w-auto h-auto z-0" 
                    src={bannerData.img || imgMain} alt="dinero"/>  
                <IoIosArrowForward 
                    className=" text-primary-yellow text-4xl absolute z-40 ml-60 left-3/4 cursor-pointer hover:bg-primary-yellow hover:text-primary-primary rounded"
                    onClick={toggleChangeBanner} />
            </div>
          
        </section>
    );
}

export { MainSection };
