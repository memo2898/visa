/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import Mural from '../../components/mural/Mural'
import ProductosServicios from '../../components/productos_servicios/ProductosServicios'
import FrasesSlider  from '../../components/frasesSlider/FrasesSlider'


function Home() {

  return (
 <>


    {/**Seccion 1 */}
        <Header/>
        <Mural/>

        
    {/**Seccion 2 */}
        <ProductosServicios/>

    {/**Seccion 3 */}
      <FrasesSlider/>

        
  
 </>
  )
}

export default Home