/* eslint-disable no-unused-vars */
import React from 'react'
import '../testimonios/Testimonios.css'

import estrellitaAzul from '../../assets/Imagenes/estrellitaAzul.svg'
import InfiniteSlider from '../infiniteSlider/InfiniteSlider';
import perfil from '../../assets/Imagenes/perfil.png'


function Testimonios() {
    const objetoDatos = [
        {
            nombre:"Juanita Lopez",
            subtitulo:"Algun dato relevante",
            estrellas: 3,//Maximo 5
            comentario:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod corrupti temporibus cum omnis expedita, magnam placeat ad dolorum distinctio nulla itaque dicta. Impedit, sapiente aliquam vel inventore sit blanditiis fuga!",
            imagen:perfil
        },
        {
            nombre:"Francisco Lopez",
            subtitulo:"Algun dato relevante",
            estrellas: 2,//Maximo 5
            comentario:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod corrupti temporibus cum omnis expedita, magnam placeat ad dolorum distinctio nulla itaque dicta. Impedit, sapiente aliquam vel inventore sit blanditiis fuga!",
            imagen:perfil
        },
        {
            nombre:"Federico Perez",
            subtitulo:"Algun dato relevante",
            estrellas: 5,//Maximo 5
            comentario:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod corrupti temporibus cum omnis expedita, magnam placeat ad dolorum distinctio nulla itaque dicta. Impedit, sapiente aliquam vel inventore sit blanditiis fuga!",
            imagen:perfil
        },
    ];

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

<div className="cont-slidersInf">
    <InfiniteSlider rtl={false} autoplaySpeed={500} speed={5000} objetoDatos={objetoDatos} />
    <InfiniteSlider rtl={true} autoplaySpeed={500} speed={5000}  objetoDatos={objetoDatos} />

</div>
   


    </div>
  )
}

export default Testimonios