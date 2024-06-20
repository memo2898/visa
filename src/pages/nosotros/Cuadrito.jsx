/* eslint-disable react/prop-types */
import './Cuadrito.css'

function Cuadrito({titulo, tipoCuadrito, imgCuadrito}) {
    console.log(titulo);
    console.log(tipoCuadrito);
    console.log(imgCuadrito);

    const claseCuadrito = tipoCuadrito==="rojo"?"rojo":tipoCuadrito==="blanco"?"blanco":tipoCuadrito==="azul"?"azul":"";
  return (
    <div className={`item-cuadrito ${claseCuadrito}` }>
        <div className="cont-sup-texto-ico">
            <div className="cont-texto-c">
                <span>Visión</span>
            </div>
            <div className="cont-img-c">
                <img src="" className='img-c'/>
            </div>
        </div>
    </div>
  )
}

export default Cuadrito