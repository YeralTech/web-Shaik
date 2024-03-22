
import vectorImg from '../../asset/vector.png'
import './style.css'

const Banner = () => {
    return(
        <>
        <img className="verctor-Line"
         src={vectorImg} alt=""/>
       
         <div className="banner-Container">
            <p>Shaik Asesores Panamá no solicita ningún tipo de pago en efectivo ni transferencia bancaria para acceder a nuestros servicios de cotización y trámites de préstamos personales, ya que nuestros servicios de asesoría y gestión son gratis para nuestros clientes.</p>
        
        </div>
        </>
       


    )
}

export {Banner};