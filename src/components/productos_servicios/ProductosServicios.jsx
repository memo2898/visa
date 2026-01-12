/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductosServicios.css'

import imagenVisa from '../../assets/Imagenes/visaImg1.png'
import libretaFormularioDS160 from '../../assets/Imagenes/libreta-doctor.png'
import libretaFormularioI130 from '../../assets/Imagenes/libretita.png'
import consultaVirtual from '../../assets/Imagenes/celular.png'
import familia from '../../assets/Imagenes/familia.png'

// Array de servicios para mantener consistencia
const servicios = [
  {
    id: 'calificacion_visa',
    titulo: 'Calificación para Visa',
    descripcion: 'Ofrecemos asesoramiento y evaluación para determinar si cumples con los requisitos necesarios para obtener una visa de no inmigrante a los EE.UU.',
    imagen: imagenVisa,
    estilo: '',
    imgClass: 'img1',
    contImgClass: 'cont-img1'
  },
  {
    id: 'formulario_ds160',
    titulo: 'Formularios DS160',
    descripcion: 'Formulario de solicitud en línea para obtener una visa de no inmigrante en EE.UU., necesaria para viajes temporales por turismo, negocios o estudios.',
    imagen: libretaFormularioDS160,
    estilo: 'fondo-azul-degradado',
    imgClass: 'img2',
    contImgClass: 'cont-img2'
  },
  {
    id: 'formulario_i130',
    titulo: 'Formularios i130',
    descripcion: 'Permite a ciudadanos y residentes de EE.UU. solicitar la residencia permanente para un familiar extranjero, validando su relación familiar.',
    imagen: libretaFormularioI130,
    estilo: 'fondo-rojo-degradado',
    imgClass: 'img3',
    contImgClass: 'cont-img3'
  },
  {
    id: 'consulta_virtual',
    titulo: 'Consulta Virtual',
    descripcion: 'Programa una consulta virtual para recibir orientación personalizada sobre tus trámites migratorios desde la comodidad de tu hogar.',
    imagen: consultaVirtual,
    estilo: '',
    imgClass: 'img4',
    contImgClass: 'cont-img4'
  },
  {
    id: 'reunificacion_familiar',
    titulo: 'Formularios de Reunificación Familiar',
    descripcion: 'Los formularios de Reunificación Familiar en EE.UU. permiten a ciudadanos y residentes permanentes solicitar la inmigración de sus familiares.',
    imagen: null,
    estilo: '',
    imgClass: 'cont-img5',
    tipo: 'vertical'
  },
  {
    id: 'consulta_presencial',
    titulo: 'Consulta Presencial',
    descripcion: 'Agenda una consulta presencial con uno de nuestros expertos para discutir tus necesidades migratorias y recibir asistencia directa.',
    imagen: null,
    estilo: 'fondo-azul-degradado',
    imgClass: 'cont-img6',
    tipo: 'vertical'
  }
];

function ProductosServicios() {
  const navigate = useNavigate();

  const handleVerServicio = (servicioId) => {
    navigate(`/contactos?servicio=${servicioId}`);
  };

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
              <button 
                className='btn-generico-2 growth fondo-azul'
                onClick={() => handleVerServicio('calificacion_visa')}
              >
                Ver
              </button>
            </div>
            <div className="card-servicio-lado-derecho cont-img1">
              <img className="img-card-servicio img1" src={imagenVisa} alt="Calificación para Visa" />
            </div>
          </div>
          {/**Item card end */}

          {/**Item card start */}
          <div className="item-card-servicio fondo-azul-degradado">
            <div className="card-servicio-lado-izquierdo">
              <h2 className="titulo-card-servicio">Formularios DS160</h2>
              <div className="cont-texto-parrafo-card-servicio">
                <p className="parrafo-card-servicio">Formulario de solicitud en línea para obtener una visa de no inmigrante en EE.UU., necesaria para viajes temporales por turismo, negocios o estudios.</p>
              </div>
              <button 
                className='btn-generico-2 growth'
                onClick={() => handleVerServicio('formulario_ds160')}
              >
                Ver
              </button>
            </div>
            <div className="card-servicio-lado-derecho cont-img2">
              <img className="img-card-servicio img2" src={libretaFormularioDS160} alt="Formularios DS160" />
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
              <button 
                className='btn-generico-2 growth'
                onClick={() => handleVerServicio('formulario_i130')}
              >
                Ver
              </button>
            </div>
            <div className="card-servicio-lado-derecho cont-img3">
              <img className="img-card-servicio img3" src={libretaFormularioI130} alt="Formularios i130" />
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
              <button 
                className='btn-generico-2 growth fondo-azul'
                onClick={() => handleVerServicio('consulta_virtual')}
              >
                Ver
              </button>
            </div>
            <div className="card-servicio-lado-derecho cont-img4">
              <img className="img-card-servicio img4" src={consultaVirtual} alt="Consulta Virtual" />
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
                  Los formularios de Reunificación Familiar en EE.UU. permiten a ciudadanos y residentes permanentes solicitar la inmigración de sus familiares
                </p>
              </div>
              <button 
                className='btn-generico-2 growth fondo-azul'
                onClick={() => handleVerServicio('reunificacion_familiar')}
              >
                Ver
              </button>
            </div>
            <div className="card-servicio-lado-derecho">
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
                <p className="parrafo-card-servicio">Agenda una consulta presencial con uno de nuestros expertos para discutir tus necesidades migratorias y recibir asistencia directa.</p>
              </div>
              <button 
                className='btn-generico-2 growth'
                onClick={() => handleVerServicio('consulta_presencial')}
              >
                Ver
              </button>
            </div>
            <div className="card-servicio-lado-derecho">
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