/* eslint-disable no-unused-vars */
import React from 'react'
import './ProductosServicios.css'


import imagenVisa from '../../assets/Imagenes/visaImg1.png'
import libretaFormularioDS160 from '../../assets/Imagenes/libreta-doctor.png'
import libretaFormularioI130 from '../../assets/Imagenes/libretita.png'
import consultaVirtual from '../../assets/Imagenes/celular.png'
import familia from '../../assets/Imagenes/familia.png'


function ProductosServicios() {
  return (
    <>
        <div className="cont-margenes-laterales-2">

            <div className="cont-titulo">
                    <div className='titulos'>Productos y Servicios</div>
            </div>

            {/**----------------Contenedor cards Dobles servicios start ----------------- */}
                <div className="cont-cards-dobles-servicios">
                    {/**Item card start */}
                        <div className="item-card-servicio">
                                <div className="card-servicio-lado-izquierdo">
                                    <h2 className="titulo-card-servicio letra-azul">Calificación para Visa</h2>

                                    <div className="cont-texto-parrafo-card-servicio">
                                            <p className="parrafo-card-servicio">Ofrecemos asesoramiento y evaluación para determinar si cumples con los requisitos necesarios para obtener una visa de no inmigrante a los EE.UU.</p>
                                    </div>
                                    
                                    
                                    <button className='btn-generico-2 growth fondo-azul'>Ver</button>
                                    
                                </div>
                                <div className="card-servicio-lado-derecho cont-img1">
                                    <img className="img-card-servicio img1" src={imagenVisa}/>
                                </div>
                        </div>
                    {/**Item card end */}
                    {/**Item card start */}
                        <div className="item-card-servicio fondo-azul-degradado">
                                <div className="card-servicio-lado-izquierdo">
                                    <h2 className="titulo-card-servicio">Formularios DS160</h2>

                                    <div className="cont-texto-parrafo-card-servicio">
                                            <p className="parrafo-card-servicio">Formulario de solicitud en línea para obtener una visa de no inmigrante en EE.UU. , necesaria para viajes temporales por turismo, negocios o estudios.</p>
                                    </div>
                                    
                                    
                                    <button className='btn-generico-2 growth'>Ver</button>
                                    
                                </div>
                                <div className="card-servicio-lado-derecho cont-img2">
                                    <img className="img-card-servicio img2" src={libretaFormularioDS160}/>
                                </div>
                        </div>
                    {/**Item card end */}
               
                </div>
            {/**----------------Contenedor cards Dobles servicios end   ----------------- */}
                        
            {/**----------------Contenedor cards Dobles servicios start ----------------- */}
            <div className="cont-cards-dobles-servicios">


                    {/**Item card start */}
                        <div className="item-card-servicio fondo-rojo-degradado">
                                <div className="card-servicio-lado-izquierdo">
                                    <h2 className="titulo-card-servicio">Formularios i130</h2>

                                    <div className="cont-texto-parrafo-card-servicio">
                                            <p className="parrafo-card-servicio">Permite a ciudadanos y residentes de EE.UU. solicitar la residencia permanente para un familiar extranjero, validando su relación familiar.</p>
                                    </div>
                                    
                                    
                                    <button className='btn-generico-2 growth'>Ver</button>
                                    
                                </div>
                                <div className="card-servicio-lado-derecho cont-img3">
                                    <img className="img-card-servicio img3" src={libretaFormularioI130}/>
                                </div>
                        </div>
                    {/**Item card end */}

                    
                    {/**Item card start */}
                    <div className="item-card-servicio">
                                <div className="card-servicio-lado-izquierdo">
                                    <h2 className="titulo-card-servicio letra-azul">Consulta Virtual</h2>

                                    <div className="cont-texto-parrafo-card-servicio">
                                            <p className="parrafo-card-servicio">Programa una consulta virtual para recibir orientación personalizada sobre tus trámites migratorios desde la comodidad de tu hogar.</p>
                                    </div>
                                    
                                    
                                    <button className='btn-generico-2 growth fondo-azul'>Ver</button>
                                    
                                </div>
                                <div className="card-servicio-lado-derecho cont-img4">
                                    <img className="img-card-servicio img4" src={consultaVirtual}/>
                                </div>
                        </div>
                    {/**Item card end */}
               
                </div>
            {/**----------------Contenedor cards Dobles servicios end   ----------------- */}
            {/**----------------Contenedor cards vertical servicios start ----------------- */}
            <div className="cont-cards-dobles-servicios mobile-column">



                    
                    {/**Item card start */}
                    <div className="item-card-servicio2">
                                <div className="card-servicio-lado-izquierdo">
                                    <h2 className="titulo-card-servicio letra-azul">Formularios de Reunificación Familiar</h2>

                                    <div className="cont-texto-parrafo-card-servicio">
                                            <p className="parrafo-card-servicio">
                                            Los formularios de Reunificación Familiar en EE.UU. permiten a ciudadanos y residentes permanentes solicitar la inmigración de sus familiares</p>
                                    </div>
                                    
                                    
                                    <button className='btn-generico-2 growth fondo-azul'>Ver</button>
                                    
                                </div>
                                <div className="card-servicio-lado-derecho ">
                                        <div className="cont-hijo-lado-derecho">
                                            <div className="cont-img5"></div>
                                        </div>
                                </div>
                        </div>
                    {/**Item card end */}
                                        {/**Item card start */}
                                        <div className="item-card-servicio2 fondo-azul-degradado">
                                <div className="card-servicio-lado-izquierdo">
                                    <h2 className="titulo-card-servicio">Consulta Presencial</h2>

                                    <div className="cont-texto-parrafo-card-servicio">
                                            <p className="parrafo-card-servicio">Agenda una consulta presencial con uno de nuestros expertos para discutir tus necesidades migratorias y recibir asistencia directa .</p>
                                    </div>
                                    
                                    
                                    <button className='btn-generico-2 growth'>Ver</button>
                                    
                                </div>
                                <div className="card-servicio-lado-derecho ">
                                        <div className="cont-hijo-lado-derecho">
                                            <div className="cont-img6"></div>
                                        </div>
                                </div>
                        </div>
                    {/**Item card end */}
               
                </div>
            {/**----------------Contenedor cards vertical servicios end   ----------------- */}
            
        </div>
    </>
  )
}

export default ProductosServicios