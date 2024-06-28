import React, { useState } from "react";
import imgMain from '../../asset/banner 1-min.png';
import secondImgMain from '../../asset/banner2-min.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import imgMainMobile from '../../asset/banner-mobile-min.png';
import imgMainTable from '../../asset/banner-tablet-min.png';
import imgSecondMobile from '../../asset/banner-mobile2-min.png';
import imgSecondTable from '../../asset/banner-mobile2-min.png';


const MainSection = () => {
    const [changeBanner, setChangeBanner] = useState(false);

    const defaultBanner = { 
        img: imgMain,
        imgMobile: imgMainMobile,
        imgTablet: imgMainTable
    };
    const alternateBanner = { 
        img: secondImgMain,
        imgMobile: imgSecondMobile,
        imgTablet: imgSecondTable
    };

    const bannerData = changeBanner ? alternateBanner : defaultBanner;

    const toggleChangeBanner = () => {
        setChangeBanner(!changeBanner);
    };

    return (
        <section id="main-section" className=" flex justify-center items-center w-full h-auto">
            <div className="main-container relative flex justify-center items-center w-full text-primary-primary">
                <IoIosArrowBack 
                    className="text-secondary-primary text-2xl ml-2 z-50 absolute top-1/2 left-0 cursor-pointer 
                    hover:bg-secondary-primary hover:text-primary-primary rounded 
                    desktop-lg:ml-10 desktop:ml-20
                    mobile-sm: ml-1" 
                    
                    onClick={toggleChangeBanner} 
                />

                <img 
                    className="w-full h-auto object-cover hidden desktop:block" 
                    src={bannerData.img} 
                    alt="dinero"
                />
                <img 
                    className="w-full h-auto object-cover hidden tablet:block desktop:hidden" 
                    src={bannerData.imgTablet} 
                    alt="tablet banner" 
                />
                <img 
                    className="w-full h-auto object-cover block  tablet:hidden desktop:hidden " 
                    src={bannerData.imgMobile} 
                    alt="mobile banner" 
                />
                
                <IoIosArrowForward 
                    className="text-secondary-primary text-2xl absolute top-1/2 right-0 cursor-pointer 
                    hover:bg-secondary-primary hover:text-primary-primary rounded
                    desktop-lg:mr-10 desktop:mr-8 mobile-sm: mr-1" 
                    onClick={toggleChangeBanner} 
                />
                
            </div>
        
        </section>
    );
}

export { MainSection };
