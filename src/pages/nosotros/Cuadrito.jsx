/* eslint-disable react/prop-types */


function Cuadrito({titulo, tipoCuadrito, imgCuadrito, parrafoCuadrito}) {


    const claseCuadrito = tipoCuadrito==="rojo"?"rojo":tipoCuadrito==="blanco"?"blanco":tipoCuadrito==="azul"?"azul":"";
    const colorLetra = tipoCuadrito==="rojo"?"claro":tipoCuadrito==="blanco"?"oscuro":tipoCuadrito==="azul"?"claro":"";
  return (
    <div className={`item-cuadrito ${claseCuadrito}` }>
        <div className="cont-sup-texto-ico">
            <div className="cont-texto-c">
                <span className={`texto-c-titulo ${colorLetra} `} >{titulo}</span>
            </div>
            <div className="cont-img-cuadrito">
                <img src={imgCuadrito} className='img-c'/>
            </div>
        </div>
        <div className="cont-descripcion-texto-c">
            <p className={`descripcion-texto-c  parrafo-cuadrito ${colorLetra}`}>
            {parrafoCuadrito}
            </p>
        </div>
    </div>
  )
}

export default Cuadrito