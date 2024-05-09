/* eslint-disable no-unused-vars */
import React from 'react'
import '../testimonios/Testimonios.css'

import estrellitaAzul from '../../assets/Imagenes/estrellitaAzul.svg'
import InfiniteSlider from '../infiniteSlider/InfiniteSlider'


function Testimonios() {
  return (
    <div className='cont-testimonios-comp'>
        {/**Contenedor titulo start */}
            <div className="cont-titulo-testimonio">
                <h1 className=" titulos">Testimonios</h1>
            </div>
        {/**Contenedor titulo end */}


    {/**Contenedor titulo */}

    <div className="cont-frase-stars">
        <img src={estrellitaAzul} className="star-autor"/>
        <span className="frase-azul">Lo que opina nuestra gente: </span>
        <img src={estrellitaAzul} className="star-autor"/>
    </div>

    <InfiniteSlider/>
    <InfiniteSlider/>


    </div>
  )
}

export default Testimonios