/* eslint-disable no-unused-vars */
import React from 'react'

const prueba = ()=>{
  alert("Ironico")
}

function OpcionesMenu() {
  return (
    <ul className='opciones-nav'>
    <li className="opcion-nav" onClick={prueba}>Inicio</li>
    <li className="opcion-nav">Nosotros</li>
    <li className="opcion-nav">Servicios</li>
    <li className="opcion-nav">Contacto</li>
</ul>
  )
}

export default OpcionesMenu