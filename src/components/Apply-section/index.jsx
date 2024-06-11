import React from "react";

const ApplySection = ()  => {

    const applyData = [
        {
            applyIcon: '',
            applyTitle: 'Empresa Privada',
        },
        {
            applyIcon: '',
            applyTitle: 'Gobierno',
        },
        {
            applyIcon: '',
            applyTitle: 'Fuerza Publica',
        },
        {
            applyIcon: '',
            applyTitle: 'Profesionales de la salud',
        },
        {
            applyIcon: '',
            applyTitle: 'Empleados de la ACP',
        },
        {
            applyIcon: '',
            applyTitle: 'Pensionados | Jubilados',
        },
        {
            applyIcon: '',
            applyTitle: '',
        },
    ]
    return(
        <section className="flex flex-col justify-center items-center w-full px-8 py-10 h-auto bg-primary-light">
            <h1 className="text-4xl font-bold text-primary-background py-12 ">Quienes Aplican</h1>
            <div className="grid grid-cols-1 gap-6 p-4 max-w-screen-lg w-full justify-center items-center  md:grid-cols-2 lg:grid-cols-3">
            {applyData.map((data, index) => (
                <div className="bg-primary-background text-primary-light w-1/2 text-center   p-4 rounded-xl " key={index}>
                    <p className="  ">{data.applyTitle}</p>
                </div>
                    ))} 
            </div>
      
</section>
    )
}

export { ApplySection}