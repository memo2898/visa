/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'



function OpcionesMenu() {
  return (
    <ul className='opciones-nav'>
          <Link to={'/'}>
            <li className="opcion-nav growth">Inicio</li>
          </Link>

          <Link to={'/nosotros'}>
            <li className="opcion-nav growth">Nosotros</li>
          </Link>
          <Link to={'/servicios'}>
            <li className="opcion-nav growth">Servicios</li>
          </Link>
          <Link to={'/contactos'}>
            <li className="opcion-nav growth">Contactos</li>
          </Link>

    </ul>
  )
}

export default OpcionesMenu