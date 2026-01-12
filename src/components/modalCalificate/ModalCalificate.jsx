import React, { useState, useEffect } from 'react';
import './ModalCalificate.css';
import tioSam from '../../assets/Imagenes/WEBP/tio_sam.webp';

function ModalCalificate({ 
  delay = 0, 
  showOnlyOnce = false, 
  storageKey = 'modal_calificate_shown' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Verificar si debe mostrarse solo una vez
    if (showOnlyOnce) {
      const alreadyShown = localStorage.getItem(storageKey);
      if (alreadyShown) return;
    }

    // Mostrar modal después del delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (showOnlyOnce) {
        localStorage.setItem(storageKey, 'true');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnlyOnce, storageKey]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-calificate-overlay')) {
      handleClose();
    }
  };

  const handleCalificate = () => {
    window.open('https://check.visasunitedstates.com/', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`modal-calificate-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`modal-calificate-container ${isClosing ? 'closing' : ''}`}>
        
        {/* Header azul */}
        <div className="modal-calificate-header">
          <h2>¡Tu sueño americano está más cerca de lo que crees!</h2>
          <button className="modal-calificate-close" onClick={handleClose}>
            &times;
          </button>
        </div>

        {/* Contenido */}
        <div className="modal-calificate-content">
          {/* Imagen Tío Sam */}
          <div className="modal-calificate-image">
            <img src={tioSam} alt="Tío Sam te quiere" />
          </div>

          {/* Texto */}
          <div className="modal-calificate-text">
            <p>
              Miles de personas viajan cada año a Estados Unidos por turismo, 
              negocios o para reencontrarse con sus seres queridos.
            </p>
            
            <p>
              ¿Y tú? En solo <strong>2 minutos</strong> puedes completar nuestra 
              evaluación de pre-calificación y un especialista analizará tu perfil 
              para determinar si cumples con los requisitos para obtener tu visa americana.
            </p>
            
            <p>
              <strong>¡Da el primer paso hacia tu sueño americano!</strong>
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="modal-calificate-buttons">
          <button 
            className="modal-calificate-btn-primary"
            onClick={handleCalificate}
          >
            ¡Descubre si Calificas Ahora!
          </button>
          
          <button 
            className="modal-calificate-btn-secondary"
            onClick={handleClose}
          >
            Quizás después
          </button>
        </div>

        {/* Acento inferior naranja */}
        {/* <div className="modal-calificate-accent"></div> */}
      </div>
    </div>
  );
}

export default ModalCalificate;