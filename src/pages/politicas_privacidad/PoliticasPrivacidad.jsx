/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function PoliticasPrivacidad() {
  return (
    <>
    <Header/>
    <section className="main-content-terminos">
        <div className="cont-margenes-laterales-2">
         
            <div className="cont-titulo">
                        <div className='titulos'>Políticas de Privacidad</div>
            </div>
                {/**Ultima Actualizacion start */}
                <p className="text-parrafos"><strong>Última actualización: </strong>21 Junio 2024</p>
                {/**Ultima Actualizacion end */}
<br />
<br />

                {/**Acápite start */}
                <h2 className='titulo-acap'>1. Introducción</h2>
                <p className="text-parrafos">VisaUS ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información personal cuando utiliza nuestro sitio web (el "Sitio") y nuestros servicios.</p>
                {/**Acápite end */}



                {/**Acápite start */}
                <h2 className='titulo-acap'>2. Información que Recopilamos</h2>

                <p className="text-parrafos">a. <strong>Información Personal:  </strong> Podemos recopilar la siguiente información personal cuando usted se registra en nuestro Sitio o utiliza nuestros servicios:</p>

                <br />

                <ul className='lista-terminos'>
                  <li className='elemento-lista'>Nombre</li>
                  <li className='elemento-lista'>Dirección de correo electrónico</li>
                  <li className='elemento-lista'>Número de teléfono</li>
                  <li className='elemento-lista'>Dirección postal</li>
                  <li className='elemento-lista'>Información de pago</li>
                  
                </ul>

                <p className="text-parrafos">b. <strong>Información No Personal:   </strong> Podemos recopilar información no personal sobre su visita al Sitio, como su dirección IP, tipo de navegador, idioma del navegador, páginas visitadas y el tiempo de su visita.</p>
                <br />


                {/**Acápite end */}

         </div>
 
        </section>
    <Footer/>
</>
  )
}

export default PoliticasPrivacidad