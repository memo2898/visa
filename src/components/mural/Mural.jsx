/* eslint-disable no-unused-vars */
import React from "react";
import "./Mural.css";
import tio_sam from "../../assets/Imagenes/WEBP/tio_sam.webp";

import SocialMedia1 from "../social_media/SocialMedia1";

function Mural() {
  return (
    <>
      <div className="cont-margenes-laterales-1">
        <section className="cont-mural">
          {/**---------Contendor parte azul start ---------- */}
          
          <div className="cont-izquerda-azul">
          <div className="cont-zona-visible-izq">
            <div className="cont-texto-mural-izquierda">
              <h1>¡CALIFÍCATE PARA TU VISA!</h1>
              <p>
                Descubre si cumples con los requisitos para obtener tu visa
                americana. Nuestros especialistas analizarán tu perfil en detalle.
              </p>
            </div>

            <div className="cont-precios-modalidades">
              <div className="cont-card-modalidades">
                <div className="card-modalidad">
                  <span className="modalidad-titulo">ESTÁNDAR</span>
                  <span className="modalidad-precio">$10</span>
                  <span className="modalidad-tiempo">Resultado en 2-3 hrs</span>
                </div>
                <div className="card-modalidad card-modalidad-destacada">
                  <span className="modalidad-etiqueta">Más rápido</span>
                  <span className="modalidad-titulo">EXPRESO</span>
                  <span className="modalidad-precio">$15</span>
                  <span className="modalidad-tiempo">Resultado en 1-2 hrs</span>
                </div>
              </div>

              {/* Beneficios de la calificación */}
              <div className="cont-beneficios-mural">
                <div className="beneficio-item">
                  <span className="beneficio-icono">✓</span>
                  <span className="beneficio-texto">Análisis detallado de tu perfil migratorio</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icono">✓</span>
                  <span className="beneficio-texto">Recomendaciones personalizadas</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icono">✓</span>
                  <span className="beneficio-texto">Tips para la entrevista consular</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icono">✓</span>
                  <span className="beneficio-texto">Identificación de fortalezas y debilidades</span>
                </div>
              </div>

              <div className="cont-btn-mural">
                <a href="https://check.visasunitedstates.com/">
                  <button className=" growth expand-btn-mural">
                    Califica Ahora
                  </button>
                </a>
              </div>

            </div>
          </div>
             </div>
          {/**---------Contendor parte azul end ---------- */}

          {/**---------Contendor parte blanca start ---------- */}
          <div className="cont-derecha-blanca">
            <div className="cont-tio-sam">
              <img src={tio_sam} alt="Evaluación de visa americana" className="tio-sam" />
            </div>
            <div className="cont-btn2-mural">
              <a href="https://check.visasunitedstates.com/">
                <button className="btn-generico-1 btn-rojo">
                  Califica Ahora
                </button>
              </a>
            </div>

            <div className="cont-redes-sociales">
              <SocialMedia1 />
            </div>
          </div>
          {/**---------Contendor parte blanca end ---------- */}
        </section>

       

 
      </div>
    </>
  );
}

export default Mural;