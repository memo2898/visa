/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import ProductosServicios from '../../components/productos_servicios/ProductosServicios'
import Footer from '../../components/footer/Footer'


function Servicios() {
  return (

    <>
    <main>
      
      <section className="cont-superior">
        <Header/>
        <ProductosServicios/>  
      </section>

      
      <section className="cont-inferior">
          <Footer/>
      </section>

    </main>
        
             
    </>
  )
}

export default Servicios