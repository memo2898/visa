/* eslint-disable no-unused-vars */
import React from 'react'
import './Mural.css'
import tio_sam from '../../assets/Imagenes/tio_sam.png'
import SocialMedia1 from '../social_media/SocialMedia1'


function Mural() {
  return (
    <>
        <div className="cont-margenes-laterales-1">
                <section className="cont-mural">
                    {/**---------Contendor parte azul start ---------- */}
                        <div className="cont-izquerda-azul">
                            <div className="cont-texto-mural-izquierda">
                                <h1>¡ESTE ES TU MOMENTO!</h1>
                                <p>¡Únete a la familia de soñadores y haz realidad tus metas! ¡Es hora de dar el primer paso hacia tu sueño americano! Aplica para tu visa hoy mismo y comienza el viaje hacia una vida llena de oportunidades y experiencias inolvidables. </p>
                            </div>
                            <div className="cont-btn-mural">
                                <button className='btn-generico-1 growth'>Califica Ahora</button>
                            </div>
                        </div>
                    {/**---------Contendor parte azul end ---------- */}


                    {/**---------Contendor parte blanca end ---------- */}
                        <div className="cont-derecha-blanca">
                            <div className="cont-tio-sam">
                                    <img src={tio_sam} alt="" className="tio-sam" />
                            </div>
                            <div className="cont-btn2-mural">
                                <button className='btn-generico-1 btn-rojo '>Califica Ahora</button>
                            </div>

                            <div className="cont-redes-sociales">
                                <SocialMedia1/>
                            </div>
                        </div>
                    {/**---------Contendor parte blanca end ---------- */}
                </section>
        </div>
    </>
  )
}

export default Mural