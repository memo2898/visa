/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";

import estrellita from '../../assets/Imagenes/estrellita.svg'

import flechaIzquierda from '../../assets/Iconos/SVG/f_izquierda.svg'
import flechaDerecha from '../../assets/Iconos/SVG/f_derecha.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../frasesSlider/FrasesSlider.css'



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
  
  function FrasesSlider() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow className={"growth"}/>,
      prevArrow: <SamplePrevArrow />
    };
    return (

      <div className="slider-container ">
        <div className="cont-margenes-laterales-2">
            <Slider {...settings}>

              {/**Item start */}
                <div className="cont-contenido-slider">
                  <div className="cont-lafrase-slider">
                      <p className="lafrase-slider">
                      " El sueño americano es una historia de éxito que se escribe con determinación, perseverancia y un espíritu indomable "
                      </p>

                      <div className="cont-autor-stars">
                          <img src={estrellita} className="star-autor"/>
                          <span className="autor-star">Alexis Germán</span>
                          <img src={estrellita} className="star-autor"/>
                      </div>

                  </div>
               
                </div>
              {/**Item end */}

              {/**Item start */}
                <div className="cont-contenido-slider">
                  <div className="cont-lafrase-slider">
                      <p className="lafrase-slider">
                      " Los sueños no tienen fecha de caducidad. "
                      </p>

                      <div className="cont-autor-stars">
                          <img src={estrellita} className="star-autor"/>
                          <span className="autor-star">Jesse Jackson</span>
                          <img src={estrellita} className="star-autor"/>
                      </div>

                  </div>
               
                </div>
              {/**Item end */}

              {/**Item start */}
                <div className="cont-contenido-slider">
                  <div className="cont-lafrase-slider">
                      <p className="lafrase-slider">
                      " El viaje de mil millas comienza con un solo paso. "
                      </p>

                      <div className="cont-autor-stars">
                          <img src={estrellita} className="star-autor"/>
                          <span className="autor-star">Lao Tzu</span>
                          <img src={estrellita} className="star-autor"/>
                      </div>

                  </div>
               
                </div>
              {/**Item end */}
              {/**Item start */}
                <div className="cont-contenido-slider">
                  <div className="cont-lafrase-slider">
                      <p className="lafrase-slider">
                      " No existe viento favorable para el que no sabe a qué puerto se dirige."
                      </p>

                      <div className="cont-autor-stars">
                          <img src={estrellita} className="star-autor"/>
                          <span className="autor-star">Séneca</span>
                          <img src={estrellita} className="star-autor"/>
                      </div>

                  </div>
               
                </div>
              {/**Item end */}
             

        

             
              
            </Slider>
          </div>
 

      </div>
    );
  }
  
  export default FrasesSlider;