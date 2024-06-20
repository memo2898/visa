/* eslint-disable no-unused-vars */
import React from 'react'
import './FormularioContacto.css'
function FormularioContacto() {

  return (
    <form className='cuerpoForm'>
        <div className="cont-doble-input">

            {/**Input 1 start */}
                    <div className="cont-unico-input">
                    {/**Input start */}
                    <div className="cont-input-elementos">
                        <span>Nombre:</span>
                        <input type="text" placeholder="" />
                    </div>
                    {/**Input end */}
                    </div>
            {/**Input 1 end */}
            {/**Input 2 start */}
                    <div className="cont-unico-input">
                    {/**Input start */}
                    <div className="cont-input-elementos">
                        <span>Apellido:</span>
                        <input type="text" placeholder="" />
                    </div>
                    {/**Input end */}
                    </div>
            {/**Input 2 end */}



        </div>
        <div className="cont-unico-input">
            {/**Input start */}
            <div className="cont-input-elementos">
                <span>Correo Electrónico:</span>
                <input type="text" placeholder="" />
            </div>
            {/**Input end */}
        </div>

        <div className="cont-unico-input">
            {/**Input start */}
            <div className="cont-input-elementos">
                <span>Dirección:</span>
                <input type="text" placeholder="" />
            </div>
            {/**Input end */}
        </div>
        <div className="cont-unico-input">
            {/**Input start */}
            <div className="cont-input-elementos">
                <span>Mensaje:</span>
                <textarea className="basic-textarea" id="" ></textarea>
            </div>
            {/**Input end */}
        </div>

        <div className="cont-btn-f">
                <button className="btn-form ">Enviar</button>
        </div>


    </form>
  )
}

export default FormularioContacto