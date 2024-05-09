/* eslint-disable no-unused-vars */
import React from 'react'
import '../cardPerfil/CardPerfil.css'
import comilla from '../../assets/Imagenes/comilla.svg'
import estrellitaAmarilla from '../../assets/Imagenes/estrellitaAmarilla.svg';


// eslint-disable-next-line react/prop-types
function CardPerfil({nombre, subtitulo,imagen,estrellas, comentario}) {
  return (
    <div className='card-perfil'>
      {/*<h3>{nombre}</h3>
      <h3>{subtitulo}</h3>
      <h3>{imagen}</h3>
      <h3>{estrellas}</h3>
      <h3>{comentario}</h3>*/}
  
      <div className="cont-ico-principal">
          <img src={comilla} className="ico-principal" />
      </div>
      <div className="cont-parrafo-card">
          <p className="parrafo-card-tes">{comentario}</p>
      </div>
      <div className="cont-img-text">
        {/**-----Cont img start ------*/}
          <div className="cont-img-c">
            <img src={imagen} className='img-card-perfil'/>
          </div>
        {/**-----Cont img end ------*/}

        {/**-----Cont textos start ----- */}
          <div className="cont-textos-strellas-c">
              <span className="nombre-card">{nombre}</span>
              <span className="subtitulo-card">{subtitulo}</span>

            <div className='cont-estrellas'>
              {[...Array(estrellas)].map((_, index) => (
                  <div key={index} >
                     <img src={estrellitaAmarilla} className='estrellita-card'/>
                  </div>
              ))}
              </div>
          </div>
        {/**-----Cont textos end ----- */}


      </div>


    </div>
  )
}

export default CardPerfil