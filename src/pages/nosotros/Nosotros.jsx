/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import '../nosotros/Nosotros.css'

import imagenEstatua from '../../assets/Imagenes/estatua.png'
import Cuadrito from './Cuadrito'

import mision from '../../assets/Imagenes/SVG/mision_claro.svg'
import vision from '../../assets/Imagenes/SVG/vision_oscuro.svg'
import valores from '../../assets/Imagenes/SVG/valores_claro.svg'
function Nosotros() {

  
  return (
    <>
           <>
    <main>
   
      <section className="cont-superior">
        
        <Header/>

        <div className="cont-margenes-laterales-2">
         
        <div className="cont-titulo">
                    <div className='titulos'>Nosotros</div>
        </div>

        {/**Seccion Cuadro 1 grande con la frase start */}
    
          <section className='cuadro1-nosotros'>

                <div className="cuadro-lado-izquierdo">

                  <div className="cont-parrafo-cuadro">
                      <p className="parrafo-cuadro">¡Únete a la familia de soñadores y haz realidad tus metas! ¡Es hora de dar el primer paso hacia tu sueño americano! Aplica para tu visa hoy mismo y comienza el viaje hacia una vida llena de oportunidades y experiencias inolvidables. 
                      </p>
                </div>

              </div>

              <div className="cuadro-lado-derecho">
                    <div className="cont-img-cuadro">
                      <img className="img-cuadro" src={imagenEstatua}/>
                      </div>
              </div>

          </section>
        {/**Seccion Cuadro 1 grande con la frase end */}

        {/**Seccion 2 contendor cards de colores start */}
        <div className="cont-cuadritos-colores">
          {/**Cuadrito item start*/}
              <Cuadrito
                titulo="Misión"
                tipoCuadrito={'rojo'}
                imgCuadrito={mision}
                parrafoCuadrito={'Proveer un servicio integral y eficiente para la gestión de visas americanas, facilitando el proceso para nuestros clientes mediante asesoramiento personalizado, innovación tecnológica y un compromiso inquebrantable con la satisfacción del cliente.'}
              />
          {/**Cuadrito item end*/}
          {/**Cuadrito item start*/}
              <Cuadrito
                titulo="Visión"
                tipoCuadrito={'blanco'}
                imgCuadrito={vision}
                parrafoCuadrito={'Ser la empresa líder y referente en la gestión de visas americanas a nivel global, reconocida por nuestra excelencia en el servicio al cliente, la transparencia en nuestros procesos y nuestra capacidad de adaptación a las cambiantes necesidades del mercado.'}

              />
          {/**Cuadrito item end*/}
          {/**Cuadrito item start*/}
              <Cuadrito
                titulo="Valores"
                tipoCuadrito={'azul'}
                imgCuadrito={valores}
                parrafoCuadrito={
                  <ul className='lista-'>
                    <li>Integridad</li>
                    <li>Innovación</li>
                    <li>Compromiso con el Cliente</li>
                    <li>Responsabilidad</li>
                    <li>Transparencia</li>
                  </ul>
                }

              />
          {/**Cuadrito item end*/}
        </div>
        {/**Seccion 2 contendor cards de colores end */}

        </div>
      </section>

      
      <section className="cont-inferior">
          <Footer/>
      </section>

    </main>
        
             
    </>

    </>
  )
}

export default Nosotros