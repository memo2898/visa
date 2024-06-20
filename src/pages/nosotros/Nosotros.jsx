/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import '../nosotros/Nosotros.css'

import imagenEstatua from '../../assets/Imagenes/estatua.png'
import Cuadrito from './Cuadrito'
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
                titulo="Visa"
                tipoCuadrito={'rojo'}
                imgCuadrito={'img'}
              />
          {/**Cuadrito item end*/}
          {/**Cuadrito item start*/}
              <Cuadrito
                titulo="Visa"
                tipoCuadrito={'blanco'}
                imgCuadrito={'img'}
              />
          {/**Cuadrito item end*/}
          {/**Cuadrito item start*/}
              <Cuadrito
                titulo="Visa"
                tipoCuadrito={'azul'}
                imgCuadrito={'img'}
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