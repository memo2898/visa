/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../footer/Footer.css'
import logoVisaBlanco from '../../assets/Logos/SVG/logoVisa_Blanco.svg'


import ico_facebook from '../../assets/Iconos/SVG/btn-ico-facebook-blanco.svg'
import ico_instagram from '../../assets/Iconos/SVG/btn-ico-instagram-blanco.svg'
import ico_twitter from '../../assets/Iconos/SVG/btn-ico-twitter-blanco.svg'

import { Link } from 'react-router-dom'

function Footer() {

   const fecha = new Date();
  const year = fecha.getFullYear();
  return (
    <footer>
        <div className="cont-logo-footer">
            <img src={logoVisaBlanco} className="logo-footer" />
        </div>
        {/**----Terminos de uso ------ */}
            <div className="cont-term-pol-preg">
              
                    <span className="item_term growth">Términos de Uso </span>
                    | <span className="item_term growth"> Políticas de Privacidad </span>
                    | <span className="item_term growth"> Preguntas Frecuentes</span>
      
            </div>
        {/**----Terminos de uso ------ */}


        {/**---- Derechos reservados ------ */}
                <div className="cont-term-pol-preg">
                    <span className="derechos-reservados">© {year} VisasUnitedStated. Todos los derechos reservados.</span>
                </div>
         {/**---- Derechos reservados ------ */}


         {/**---- Redes sociales start ------ */}
         <div className="cont-term-pol-preg">
                <img src={ico_facebook} className="item-socialmedia2 growth" />
                <img src={ico_instagram} className="item-socialmedia2 growth" />
                <img src={ico_twitter} className="item-socialmedia2 growth" />

         </div>
         {/**---- Redes sociales end ------ */}
    </footer>
  )
}

export default Footer