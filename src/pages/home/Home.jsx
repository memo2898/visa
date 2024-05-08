/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import Mural from '../../components/mural/Mural'
import ProductosServicios from '../../components/productos_servicios/ProductosServicios'


function Home() {
  return (
 <>


    {/**Seccion 1 */}
        <Header/>
        <Mural/>

        
    {/**Seccion 2 */}
        <ProductosServicios/>
        
  
 </>
  )
}

export default Home