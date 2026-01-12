/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../header/Header.css'
import logo from '../../assets/Logos/SVG/logoVisa.svg'
import iconoMenu from '../../assets/Iconos/SVG/menu-bar-ico.svg'
import OpcionesMenu from './OpcionesMenu'
import MenuLateralMobile from './MenuLateralMobile'
import { Link } from 'react-router-dom'


//Este contiene el menu header
function Header2() {

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

                   

            
            
  

        </section>
   </div>
   
   </>
  )
}

export default Header2