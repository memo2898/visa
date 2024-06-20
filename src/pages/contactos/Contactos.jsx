/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header'
import  './Contactos.css';
import Footer from '../../components/footer/Footer';
import mail_ico from '../../assets/Imagenes/SVG/mail_ico.svg';
import mail_stroke_ico from '../../assets/Imagenes/SVG/mail_stroke_ico.svg';
import phone_ico from '../../assets/Imagenes/SVG/phone_ico.svg';
import whatsapp_ico from '../../assets/Imagenes/SVG/whatsapp_ico.svg';
import FormularioContacto from '../../components/formulario_contacto/FormularioContacto';


function Contactos() {
  return (
    <>
    <section className="cont-superior">
        <Header/>
          <div className="cont-margenes-laterales-2">
              
              <div className="cont-titulo">
                  <div className='titulos'>Contactos</div>
              </div>

              {/** Contenedor Doble start */}
              <div className="cont-doble-contacto">
                  {/** Contenedor Izquierdo start*/}
                    <div className="cont-izq-contacto">
                      {/** Parrafito descriptivo start */}
                        <p className="parrafito-contacto">No está seguro de lo que necesita? El equipo de VisaUS estará encantado de asistirle y sugerirte ideas de eventos que no habías considerado.</p>
                      {/** Parrafito descriptivo end */}



                      {/** Contenedor contactos miscelaneos start */}
                      <div className="cont-contactos-miscelaneos">
                            {/** Contanto miscelaneo start */}
                                <div className="item-contacto-miscelaneo">
                                    <img src={mail_ico} alt="" className="img-contacto-mc" />
                                    <p className="txt-contacto-mc">info@visaus.com</p>
                                </div>
                            {/** Contanto miscelaneo end */}
                            {/** Contanto miscelaneo start */}
                                <div className="item-contacto-miscelaneo">
                                    <img src={whatsapp_ico} alt="" className="img-contacto-mc" />
                                    <p className="txt-contacto-mc">+1 (809) - 000 - 0000</p>
                                </div>
                            {/** Contanto miscelaneo end */}
                            {/** Contanto miscelaneo start */}
                                <div className="item-contacto-miscelaneo">
                                    <img src={phone_ico} alt="" className="img-contacto-mc" />
                                    <p className="txt-contacto-mc">+1 (809) - 000 - 0000</p>
                                </div>
                            {/** Contanto miscelaneo end */}
                      </div>
                      {/** Contenedor contactos miscelaneos end */}

                    </div>
                  {/** Contenedor Izquierdo end*/}


                  {/** Contenedor Derecho start*/}
                  <div className="cont-der-contacto">

                      {/** forumulario start */}
                      <div className="cont-formulario-contacto">
                        <h2 className='titulo-card-servicio letra-azul'>¡Nos encantaría saber de usted!</h2>
                        <h2 className='titulo-card-servicio letra-azul'>Mantengámonos en contacto</h2>


                      <div className="cont-formulario">
                          <FormularioContacto/>
                      </div>
                      
                      </div>

                      {/** forumulario end */}
                  </div>
                  {/** Contenedor Derecho end*/}

              </div>
              {/** Contenedor Doble end */}


          </div>
      </section>

      <section className="cont-inferior">
        <Footer/>
      </section>
    </>
   
  )
}

export default Contactos