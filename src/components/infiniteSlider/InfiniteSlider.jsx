/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from "react-slick";

import estrellita from '../../assets/Imagenes/estrellita.svg'

import flechaIzquierda from '../../assets/Iconos/SVG/f_izquierda.svg'
import flechaDerecha from '../../assets/Iconos/SVG/f_derecha.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../frasesSlider/FrasesSlider.css'
import CardPerfil from '../cardPerfil/CardPerfil';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  }}

        onClick={onClick}
      >
          <img src={flechaDerecha} className="flechita growth"/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
          <div
          className={className}
          style={{ ...style,  }}

          onClick={onClick}
        >
            <img src={flechaIzquierda} className="flechita growth"/>
        </div>
    );
  }
  


function InfiniteSlider({rtl,autoplaySpeed,speed, objetoDatos})
{

   // console.log("Objeto datos", objetoDatos)



    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        rtl: rtl, // Cambiar dirección a derecha a izquierda
        autoplaySpeed: autoplaySpeed,
        speed: speed,
        //nextArrow: <SampleNextArrow className={"growth"}/>,
        //prevArrow: <SamplePrevArrow />
        responsive: [
            
            {
              breakpoint: 2000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                autoplaySpeed: autoplaySpeed,
                speed: speed,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplaySpeed: autoplaySpeed,
                speed: speed,
              }
            }
        ]
      };



  return (
    <>
            <Slider {...settings}>
                {objetoDatos.map((objeto, index)=>{
                   
                   return  <React.Fragment key={index}>
                     {/**Item start */}
                   
                        <CardPerfil  
                            nombre={objeto.nombre} 
                            subtitulo={objeto.subtitulo} 
                            comentario={objeto.comentario} 
                            imagen={objeto.imagen} 
                            estrellas={objeto.estrellas}
                        />
                    
                    {/**Item end */}
                    </React.Fragment>
                })
            }
           
               


            </Slider>
    </>
  )
}

export default InfiniteSlider