/* eslint-disable no-unused-vars */
import React from 'react'

const prueba = ()=>{
  alert("Ironico")
}

function OpcionesMenu() {
  return (
    <ul className='opciones-nav'>
    <li className="opcion-nav growth" onClick={prueba}>Inicio</li>
    <li className="opcion-nav growth">Nosotros</li>
    <li className="opcion-nav growth">Servicios</li>
    <li className="opcion-nav growth">Contacto</li>
</ul>
  )
}

export default OpcionesMenu