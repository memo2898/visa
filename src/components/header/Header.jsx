/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../header/Header.css'
import logo from '../../assets/Logos/SVG/logoVisa.svg'
import iconoMenu from '../../assets/Iconos/SVG/menu-bar-ico.svg'
import OpcionesMenu from './OpcionesMenu'
import MenuLateralMobile from './MenuLateralMobile'
import { Link } from 'react-router-dom'


//Este contiene el menu header
function Header() {

    const [mostrarMenuMobile, setMostrarMenuMobile]= useState(false);
    useEffect(()=>{
        window.addEventListener('resize', () => {
            if (window.innerWidth > 659) {
                setMostrarMenuMobile(false)
            }
        })
    },[mostrarMenuMobile])

    /*const manejadorAbrirMenuMobile = ()=>{
        mostrarMenuMobile===false? setMostrarMenuMobile(true):setMostrarMenuMobile(false);
    }*/

    const manejadorAbrirMenuMobile = () =>{
        setMostrarMenuMobile(!mostrarMenuMobile);
    }


    const irALogin = () =>{
        alert("Ir a Login")
    }
    const irARegistrarse = () =>{
        alert("Ir a registrarse")
    }

    
  return (
   <>
   <MenuLateralMobile isOpen={mostrarMenuMobile} manejador={manejadorAbrirMenuMobile}/>
    <div className="cont-margenes-laterales-1">
        <section className="cont-header-menu-nav">
        
                    {/**----- Contenedor logo start -------- */}
                    <div className="cont-logo-principal-header">
                        <Link to="/">
                            <img className="logo-principal-header" src={logo} alt="Logo principal" />
                        </Link>
                    </div>
                    {/**----- Contenedor logo end -------- */}

                    {/**---- Contenedor Menu Navegacion start ------*/}
                    <div className="cont-menu-navegacion">
                        {/**-----Menu de Navegacion start--- */}
                            <OpcionesMenu/>
                        {/**-----Menu de Navegacion end --- */}
                    </div>

                    {/**---- Contenedor Menu Navegacion end ------*/}

                    {/**---- Contenedor  login y registrate start --------- */}
                    <div className="cont-btns-login-registro">
                            <span className='opcion-login' onClick={irALogin}>Log in</span>
                            <button id='btn-registrarse' onClick={irARegistrarse} >Registrarse</button>
                    </div>

                    {/**---- Contenedor  login y registrate end --------- */}


                    {/**---- Contenedor  btn mobile menu start --------- */}
                    <div className="cont-btn-menu-mobile" >
                        <img className="btn-menu-mobile" src={iconoMenu} onClick={manejadorAbrirMenuMobile}/>
                    </div>
                    {/**---- Contenedor  btn mobile menu end --------- */}
            
            
  

        </section>
   </div>
   
   </>
  )
}

export default Header