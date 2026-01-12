/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './FormularioContacto.css';

// Array de servicios/asuntos con mensajes pre-hechos
const serviciosOptions = [
  { 
    value: '', 
    label: 'Seleccione una opción',
    mensaje: ''
  },
  { 
    value: 'calificacion_visa', 
    label: 'Calificación para Visa',
    mensaje: 'Hola, estoy interesado en el servicio de Calificación para Visa. Me gustaría recibir más información sobre los requisitos y el proceso.'
  },
  { 
    value: 'formulario_ds160', 
    label: 'Formularios DS160',
    mensaje: 'Hola, necesito asistencia con el formulario DS160 para mi solicitud de visa de no inmigrante.'
  },
  { 
    value: 'formulario_i130', 
    label: 'Formularios I-130',
    mensaje: 'Hola, estoy interesado en el formulario I-130 para reunificación familiar.'
  },
  { 
    value: 'consulta_virtual', 
    label: 'Consulta Virtual',
    mensaje: 'Hola, me gustaría agendar una consulta virtual para discutir mis opciones migratorias.'
  },
  { 
    value: 'reunificacion_familiar', 
    label: 'Reunificación Familiar',
    mensaje: 'Hola, necesito información sobre los formularios de Reunificación Familiar.'
  },
  { 
    value: 'consulta_presencial', 
    label: 'Consulta Presencial',
    mensaje: 'Hola, me gustaría agendar una consulta presencial con un experto.'
  },
  { 
    value: 'otro', 
    label: 'Otro',
    mensaje: ''
  },
];

// Configuración de campos con validaciones
const camposConfig = [
  { 
    name: 'nombreCompleto', 
    label: 'Nombre completo', 
    type: 'text',
    required: true,
    minLength: 3,
    errorMsg: 'Ingrese su nombre completo (mínimo 3 caracteres)'
  },
  { 
    name: 'email', 
    label: 'Correo electrónico', 
    type: 'email',
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMsg: 'Ingrese un correo electrónico válido'
  },
  { 
    name: 'asunto', 
    label: 'Asunto', 
    type: 'select',
    required: true,
    errorMsg: 'Seleccione un asunto'
  },
  { 
    name: 'especifique', 
    label: 'Especifique el asunto', 
    type: 'text',
    required: true,
    minLength: 3,
    conditional: { field: 'asunto', value: 'otro' },
    errorMsg: 'Especifique el asunto'
  },
  { 
    name: 'mensaje', 
    label: 'Mensaje', 
    type: 'textarea',
    required: true,
    minLength: 10,
    errorMsg: 'Escriba un mensaje (mínimo 10 caracteres)'
  },
];

function FormularioContacto() {
  const [searchParams] = useSearchParams();
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    asunto: '',
    especifique: '',
    mensaje: ''
  });

  // Estado de errores
  const [errors, setErrors] = useState({});
  
  // Estado de envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Leer query params al cargar
  useEffect(() => {
    const servicioParam = searchParams.get('servicio');
    if (servicioParam) {
      const servicioEncontrado = serviciosOptions.find(s => s.value === servicioParam);
      if (servicioEncontrado) {
        setFormData(prev => ({
          ...prev,
          asunto: servicioEncontrado.value,
          mensaje: servicioEncontrado.mensaje
        }));
      }
    }
  }, [searchParams]);

  // Manejar cambio en asunto para auto-llenar mensaje
  const handleAsuntoChange = (e) => {
    const selectedValue = e.target.value;
    const servicioEncontrado = serviciosOptions.find(s => s.value === selectedValue);
    
    setFormData(prev => ({
      ...prev,
      asunto: selectedValue,
      mensaje: servicioEncontrado?.mensaje || prev.mensaje,
      especifique: selectedValue !== 'otro' ? '' : prev.especifique
    }));

    // Limpiar error del campo
    if (errors.asunto) {
      setErrors(prev => ({ ...prev, asunto: '' }));
    }
  };

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validar un campo individual
  const validateField = (fieldConfig, value) => {
    // Si es condicional y no aplica, no validar
    if (fieldConfig.conditional) {
      const conditionMet = formData[fieldConfig.conditional.field] === fieldConfig.conditional.value;
      if (!conditionMet) return '';
    }

    if (fieldConfig.required && !value.trim()) {
      return fieldConfig.errorMsg;
    }

    if (fieldConfig.minLength && value.trim().length < fieldConfig.minLength) {
      return fieldConfig.errorMsg;
    }

    if (fieldConfig.pattern && !fieldConfig.pattern.test(value)) {
      return fieldConfig.errorMsg;
    }

    return '';
  };

  // Validar todo el formulario
  const validateForm = () => {
    const newErrors = {};
    
    camposConfig.forEach(campo => {
      const value = formData[campo.name] || '';
      const error = validateField(campo, value);
      if (error) {
        newErrors[campo.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simular envío (aquí conectarías con tu backend)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Datos del formulario:', formData);

      setSubmitSuccess(true);
      
      // Resetear formulario después de éxito
      setTimeout(() => {
        setFormData({
          nombreCompleto: '',
          email: '',
          asunto: '',
          especifique: '',
          mensaje: ''
        });
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Verificar si mostrar campo condicional
  const shouldShowField = (campo) => {
    if (!campo.conditional) return true;
    return formData[campo.conditional.field] === campo.conditional.value;
  };

  return (
    <form className='form-contacto' onSubmit={handleSubmit}>
      
      {/* Mensaje de éxito */}
      {submitSuccess && (
        <div className="form-success-message">
          <span>✓</span> ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
        </div>
      )}

      {/* Nombre completo */}
      <div className="form-group">
        <label htmlFor="nombreCompleto">
          Nombre completo <span className="required">*</span>
        </label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          placeholder="Ingrese su nombre completo"
          className={errors.nombreCompleto ? 'input-error' : ''}
        />
        {errors.nombreCompleto && <span className="error-msg">{errors.nombreCompleto}</span>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">
          Correo electrónico <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      {/* Asunto (Select) */}
      <div className="form-group">
        <label htmlFor="asunto">
          Asunto <span className="required">*</span>
        </label>
        <select
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleAsuntoChange}
          className={errors.asunto ? 'input-error' : ''}
        >
          {serviciosOptions.map(opcion => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
        {errors.asunto && <span className="error-msg">{errors.asunto}</span>}
      </div>

      {/* Especifique (condicional - solo si asunto es "otro") */}
      {formData.asunto === 'otro' && (
        <div className="form-group form-group-conditional">
          <label htmlFor="especifique">
            Especifique el asunto <span className="required">*</span>
          </label>
          <input
            type="text"
            id="especifique"
            name="especifique"
            value={formData.especifique}
            onChange={handleChange}
            placeholder="Describa brevemente el asunto"
            className={errors.especifique ? 'input-error' : ''}
          />
          {errors.especifique && <span className="error-msg">{errors.especifique}</span>}
        </div>
      )}

      {/* Mensaje */}
      <div className="form-group">
        <label htmlFor="mensaje">
          Mensaje <span className="required">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escriba su mensaje aquí..."
          rows={5}
          className={errors.mensaje ? 'input-error' : ''}
        />
        {errors.mensaje && <span className="error-msg">{errors.mensaje}</span>}
      </div>

      {/* Botón enviar */}
      <div className="form-actions">
        <button 
          type="submit" 
          className="btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Enviando...
            </>
          ) : (
            'Enviar mensaje'
          )}
        </button>
      </div>

    </form>
  );
}

export default FormularioContacto;