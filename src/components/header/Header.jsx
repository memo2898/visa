/* eslint-disable no-unused-vars */
import React from 'react'
import '../header/Header.css'
import logo from '../../assets/Logos/SVG/logoVisa.svg'

//Este contiene el menu header
function Header() {
  return (
   <>
   <section className="cont-header-menu-nav">
    <div className="cont-margenes-laterales-1">
            {/**----- Contenedor logo start -------- */}
            <div className="cont-logo-principal-header">
                <img className="logo-principal-header" src={logo} alt="Logo principal" />
            </div>
            {/**----- Contenedor logo end -------- */}

            {/**---- Contenedor Menu Navegacion start ------*/}
            <div className="cont-menu-navegacion">

            </div>

            {/**---- Contenedor Menu Navegacion end ------*/}

            {/**---- Contenedor  login y registrate start --------- */}
            <div className="cont-btns-login-registro">

            </div>

            {/**---- Contenedor  login y registrate end --------- */}
        </div>
   </section>
   </>
  )
}

export default Header