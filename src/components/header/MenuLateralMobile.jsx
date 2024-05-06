/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './MenuLateralMobile.css'
import logoBlanco from '../../assets/Logos/SVG/logoVisa_Blanco.svg'
import ico_close from '../../assets/Iconos/SVG/ico_close.svg'

function MenuLateralMobile({isOpen, manejador}) {

  const Cerrar = () => {
    manejador();
  }
  return (
    <>
    {
    isOpen===true?
      <div className='cont-menu-mobile'>
        <div className="cont-margenes-laterales-1">

          {/**----- Contenedor superior start -------- */}
          
          <div className="cont-superior-mobile">
                {/**----- Contenedor logo start -------- */}
                <div className="cont-logo-principal-header">
                    <img className="logo-principal-header" src={logoBlanco} alt="Logo principal" />
                </div>
                {/**----- Contenedor logo end -------- */}

                {/**----- Contenedor btn cerrar start -------- */}
                <div className="cont-btn-cerrar-menu-mobile">
                    <img src={ico_close} className="btn-cerrar-menu-mobile" onClick={Cerrar}/>
                </div>
                {/**----- Contenedor btn cerrar end -------- */}
          </div>
          {/**----- Contenedor superior start -------- */}
      </div>
    </div>
      :
     <></>
      }
      

  </>
  )
}

export default MenuLateralMobile