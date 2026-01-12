/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import Mural from '../../components/mural/Mural'
import ProductosServicios from '../../components/productos_servicios/ProductosServicios'
import FrasesSlider  from '../../components/frasesSlider/FrasesSlider'
import Testimonios from '../../components/testimonios/Testimonios'
import '../home/Home.css'
import Footer from '../../components/footer/Footer'
import ModalCalificate from '../../components/modalCalificate/ModalCalificate'


function Home() {

  
  return (
 <>

    {/** Modal de Califícate Ahora */}
    <ModalCalificate 
      delay={0}              // milisegundos (0 = inmediato, 2500 = 2.5 segundos, etc.)
      showOnlyOnce={false}   // true = solo primera visita, false = siempre
    />

    {/** Seccion 1 - Header*/}
        <Header/>

    {/** Seccion 2 - Mural principal */}    
        <Mural/>

    {/** Seccion 3 - Productos y Servicios */}
        <ProductosServicios/>

    {/** Seccion 4 - Frases*/}
      <FrasesSlider/>

    {/** Seccion 5 - Testimonios */}
      <div className='cont-margenes-laterales-2'>
          <Testimonios/>
      </div>
      
    {/**Seccion 6 - Footer */}
        <Footer/>

  
 </>
  )
}

export default Home