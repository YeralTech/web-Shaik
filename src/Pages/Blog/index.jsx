import React from "react";
import { BreadCrumb } from 'primereact/breadcrumb';
import { useNavigate } from 'react-router-dom';
import imgSaveMoney from '../../asset/i-m-waiting-delivery-fresh-ingredients.jpg';
import { IoHome } from "react-icons/io5";

const Blog = () => {
    const navigate = useNavigate();

    const dataBlog = [
        {
            imgBlog: imgSaveMoney,
            titleBlog: 'Cómo crear un presupuesto personal y mantenerlo',
            blogDescriptionPrev: 'Crear y mantener un presupuesto personal es fundamental para tener un control efectivo sobre tus finanzas. ',
            blogDescription: `
            <p>Crear y mantener un presupuesto personal es fundamental para tener un control efectivo sobre tus finanzas.</p>
            <p>A continuación, te guiamos paso a paso en este proceso clave para gestionar tu dinero de manera eficiente:</p>
            <ol>
                <li> <strong>- Evalúa tus ingresos:</strong> El primer paso para crear un presupuesto personal es identificar todos tus ingresos mensuales. Incluye salarios, ingresos adicionales como bonificaciones o ingresos pasivos.</li>
                <li> <strong>- Enumera tus gastos: </strong> Registra todos tus gastos mensuales. Divide estos gastos en dos categorías principales: fijos (como alquiler, hipoteca, servicios públicos) y variables (comida, entretenimiento, compras).</li>
                <li><strong> - Prioriza tus necesidades:</strong> Una vez que tengas una lista completa de ingresos y gastos, identifica cuáles son tus necesidades más importantes y cuáles son gastos que podrías reducir.</li>
                <li> <strong>- Utiliza herramientas de presupuesto: </strong> Hay muchas herramientas útiles disponibles para ayudarte a mantener tu presupuesto. Aplicaciones como Mint, YNAB (You Need A Budget), o incluso una simple hoja de cálculo de Excel pueden ser excelentes recursos para realizar un seguimiento detallado de tus finanzas.</li> 
                <li> <strong>- Establece metas financieras:</strong> Define metas financieras claras y alcanzables, como ahorrar para un fondo de emergencia, pagar deudas o planificar unas vacaciones.</li>
                <li> <strong>- Ajusta tu presupuesto regularmente:</strong> Revisa y ajusta tu presupuesto mensualmente para reflejar cualquier cambio en tus ingresos o gastos. Esto te ayudará a mantener el control y a realizar ajustes necesarios para alcanzar tus metas financieras.</li>
                <li> <strong>- Práctica el ahorro:</strong> Destina una parte de tus ingresos mensuales al ahorro. Esto no solo te ayudará a construir un fondo de emergencia, sino también a prepararte para futuros objetivos financieros a largo plazo como la jubilación o la compra de una vivienda.</li>
                <li> <strong>- Sé disciplinado y paciente:</strong> Mantener un presupuesto personal requiere disciplina y paciencia. No te desanimes si al principio encuentras dificultades para ajustarte. Con el tiempo y la práctica, administrarás tus finanzas con mayor facilidad y eficiencia.</li>
            </ol> <br>
            <p>Crear y mantener un presupuesto personal puede marcar la diferencia en tu estabilidad financiera a largo plazo. Es una herramienta poderosa para gestionar tus ingresos y gastos de manera efectiva, permitiéndote tomar decisiones financieras informadas y alcanzar tus metas económicas con mayor facilidad.</p>
        `
        },
        {
            imgBlog: imgSaveMoney,
            titleBlog: 'Cómo invertir inteligentemente',
            blogDescriptionPrev: 'Invertir puede parecer complicado, pero con los conocimientos adecuados puedes maximizar tus ganancias.',
            blogDescription: `<p>
            Invertir sabiamente es fundamental para construir riqueza a largo plazo. Como asesor financiero, enfoco mis recomendaciones en principios probados:</p>
            <ol>
            <li>
            <strong>1. Define tus Metas Financieras:</strong> Antes de invertir, clarifica tus objetivos a corto, medio y largo plazo. Ya sea para la jubilación, comprar una casa o educación, cada objetivo requiere una estrategia específica.</li>
           <li><strong> 2. Evalúa tu Tolerancia al Riesgo:</strong> Comprende cuánto riesgo estás dispuesto a asumir. Esto te ayudará a elegir entre opciones de inversión más conservadoras o más arriesgadas.</li>
          <li><strong> 3. Diversificación Inteligente:</strong> Distribuye tus inversiones en diferentes tipos de activos (acciones, bonos, bienes raíces). Esto reduce el riesgo global de tu cartera y mejora tus oportunidades de retorno a largo plazo.</li>
          <li><strong> 4. Estrategias de Inversión:</strong> Considera opciones como fondos de inversión indexados para diversificar automáticamente y minimizar costos, o acciones individuales para aquellos dispuestos a investigar y monitorear el mercado.</li>
          <li><strong>  5. Educación y Planificación Continua:</strong> Manténte informado sobre el mercado y ajusta tu estrategia según cambien tus circunstancias o metas. La planificación a largo plazo es clave para el éxito financiero.</li>
          <li><strong>  6. Revisión Periódica:</strong> Regularmente revisa y ajusta tu cartera de inversiones para mantenerla alineada con tus objetivos financieros y condiciones del mercado.</li>
          <br>
            Invertir inteligentemente no se trata solo de maximizar ganancias, sino de gestionar riesgos y adaptarse a tus necesidades a lo largo del tiempo. Con estos principios fundamentales y una estrategia bien definida, puedes construir una base sólida para tu futuro financiero.
            </ol>
            </p>`
        },
        {
            imgBlog: imgSaveMoney,
            titleBlog: 'Cómo Mantener una Buena Calificación de Crédito (APC)',
            blogDescriptionPrev: 'ener una buena calificación de crédito (APC) es crucial para acceder a préstamos con tasas de interés favorables y mejores condiciones financieras. ',
            blogDescription: `Tener una buena calificación de crédito (APC) es crucial para acceder a préstamos con tasas de interés favorables y mejores condiciones financieras. <br>
            <ol>
            <strong>Consejos para Mantener una Buena APC</strong>
            <li><strong>1. Paga tus Facturas a Tiempo:</strong> Los pagos puntuales son esenciales para una buena calificación de crédito. Asegúrate de pagar todas tus facturas, incluyendo tarjetas de crédito y préstamos, antes de la fecha de vencimiento.</li>
            <li><strong>2. Presupuestación: </strong> Mantén un presupuesto para controlar tus gastos y asegurarte de que puedes cumplir con todas tus obligaciones financieras.</li>
            <li><strong>3. Asesoramiento Crediticio: </strong> Si estás luchando para gestionar tu crédito, considera buscar ayuda de un asesor financiero o una agencia de asesoramiento crediticio.</li>
            <li><strong>3. Cancela Deudas: </strong> Trata de pagar tus deudas lo más rápido posible. Esto no solo mejora tu APC, sino que también reduce la carga de intereses a largo plazo.</li>
            </ol>`,
            
        },
    ];

    const items = [{ label: 'Blog', url: '/' }];
    const home = { icon: <IoHome />, url: '/' };

    const openBlogArticle = (index) => {
        navigate(`/blog/${index}`, { state: { blog: dataBlog[index] } });
    };

    return (
        <>
            <BreadCrumb model={items} home={home} className="flex text-primary-primary px-10 my-6 gap-4 h-6" />
            <section className="w-full flex flex-col justify-center items-center py-10 bg-gray-100">
                <h1 className="text-4xl font-bold text-primary-primary py-2">Blog Financiero</h1>
                <div className="flex flex-row flex-wrap gap-8 max-w-screen-lg justify-center items-center">
                    {dataBlog.map((data, index) => (
                        <div className="w-full max-w-xs shadow-lg px-8 py-8 text-primary-primary rounded-lg bg-blue-100" key={index}>
                            <img className="w-full rounded" src={data.imgBlog || imgSaveMoney} alt="" />
                            <h2 className="text-xl font-semibold py-2">{data.titleBlog}</h2>
                            <p className="w-auto pb-8 text-base">{data.blogDescriptionPrev}</p>
                            <button 
                                className="bg-secondary-primary px-4 py-2 rounded-lg" 
                                onClick={() => openBlogArticle(index)}
                            >
                                Leer más
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export { Blog };
