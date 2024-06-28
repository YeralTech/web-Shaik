import React from "react";

const StatisticBanner = () => {

    const statisticData= [
        { statistic: '7,000', statisticText: 'Clientes Atendidos por año'}, 
        { statistic: '30', statisticText: 'Años de Experiencia'}, 
        { statistic: '20', statisticText: 'Nuestros Aliados'}, 
    ]


    return(
        <section id="statistic-banner-section " className=" w-auto flex flex-col justify-center items-center bg-secondary-default ">
            <div id="statistic-banner-container" className="w-auto flex desktop:flex-row justify-center  items-center py-10 gap-2 mobile-sm:flex-col mobile-sm:gap-6">
                {statisticData.map((data, index) => (
                    <div id="statistic-banner-numbers" className="w-auto text-primary-primary  flex flex-col justify-center items-center text-center custom-borde " key={index} >
                    <h1 className="text-4xl font-semibold">+{data.statistic}</h1>
                    <p className=" text-lg px-6"> {data.statisticText}</p>
                    </div>
                    
                ))}

                
                
            </div>

        </section>
        )
}

export { StatisticBanner}