/* eslint-disable no-unused-vars */
import React from 'react'
import Header2 from '../../components/header/Header2';
import Footer from '../../components/footer/Footer';
import logo from '../../assets/Logos/SVG/logoVisa.svg'
import './Login.css'
import { Link } from 'react-router-dom';
import google from '../../assets/Imagenes/SVG/google_ico.svg'
import facebook from '../../assets/Imagenes/SVG/facebook.svg'


function Login() {
  
  return (
    <>
 <Header2></Header2>
    <div className="cont-margenes-laterales-1">
       
       <section className="contenedor-lados-login">

        <section className="lado-izquierdo-login">
          {/* Titulo Principal start */}
              <div className="cont-tituloPrincipal">
                <h1 className="tituloPrincipal">Hola, <strong>Bienvenido!</strong></h1>
              </div>
              <div className="cont-subtitulo">
                  <h3 className="subtitulo">Inicia sesión con:</h3>
              </div>
          {/* Titulo Principal end */}
          {/* Area de botones de redes sociales start */}
              <div className="cont-btns-redes-sociales">
                {/* BTON DE GOOGLE START */}
                  <div className="btn-acceder-red-acceder growth">
                    <img src={google} className="img-acceder-red-acceder" />
                    <span className='tit-btn'>Google</span>
                  </div>
                {/* BTON DE GOOGLE END */}
                {/* BTON DE GOOGLE START */}
                  <div className="btn-acceder-red-acceder growth">
                    <img src={facebook} className="img-acceder-red-acceder" />
                    <span className='tit-btn'>Facebook</span>
                  </div>
                {/* BTON DE GOOGLE END */}
              </div>
          {/* Area de botones de redes sociales end */}
          {/* Area de separadores start */}
            <div className="cont-separadores">
              <div className="linea"></div>
              <span className='peq'>Continúa con</span>
              <div className="linea"></div>
            </div>
          {/* Area de separadores end */}
          {/* Area de formulario de inicio de sesión start */}
          <div className="cont-formulario-login">
            <form className="formulario-login">
              <div className="cont-inputs">
                
              </div>
            </form>
          </div>
          {/* Area de formulario de inicio de sesión end */}
          </section>
          <section className="lado-derecho-login">

          </section>
    </section>
    </div>
  
    
</>
  )
}

export default Login