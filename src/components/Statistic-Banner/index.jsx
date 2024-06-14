import React from "react";

const StatisticBanner = () => {

    const statisticData= [
        { statistic: '7,000', statisticText: 'Clientes Atendidos por año'}, 
        { statistic: '30', statisticText: 'Años de Experiencia'}, 
        { statistic: '20', statisticText: 'Nuestros Aliados'}, 
    ]
    return(
        <section className="w-auto flex flex-col justify-center items-center bg-secondary-disable ">
            <div className="w-auto flex  justify-center  items-center py-10 gap-2">
                {statisticData.map((data, index) => (
                    <div className="w-auto text-primary-background  flex flex-col justify-center items-center text-center custom-borde" key={index}>
                    <h1 className="text-4xl font-semibold">+{data.statistic}</h1>
                    <p className=" text-lg px-6"> {data.statisticText}</p>
                    </div>
                    
                ))}

                
                
            </div>

        </section>
        )
}

export { StatisticBanner}