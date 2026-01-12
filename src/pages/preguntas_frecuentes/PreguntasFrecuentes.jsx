/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './PreguntasFrecuentes.css';

// Datos de FAQ integrados directamente en el componente
const faqData = [
  // SECCIÓN 1: SOBRE NUESTROS SERVICIOS
  {
    id: 1,
    category: "Sobre Nuestros Servicios",
    question: "¿Qué es Visas United State (VisasUS)?",
    answer: "Visas United State (VisasUS) es un servicio privado especializado en procesos migratorios hacia Estados Unidos. Ofrecemos evaluaciones informativas de perfiles migratorios, asistencia con formularios oficiales, consultas virtuales y presenciales, y orientación en procesos de reunificación familiar. Proporcionamos orientación educativa basada en criterios públicos y experiencia acumulada.",
    featured: true
  },
  {
    id: 2,
    category: "Sobre Nuestros Servicios",
    question: "¿VisasUS está afiliado al gobierno de Estados Unidos?",
    answer: "No. Visas United State (VisasUS) es una entidad privada completamente independiente. NO estamos afiliados, asociados, autorizados ni respaldados por el Gobierno de los Estados Unidos, el Departamento de Estado, embajadas, consulados ni ninguna agencia gubernamental. Somos operados por NEFTECH SOLUTIONS S.R.L.",
    featured: true
  },
  {
    id: 3,
    category: "Sobre Nuestros Servicios",
    question: "¿Qué servicios ofrecen?",
    answer: "Ofrecemos 6 servicios principales:\n\n**1. Calificación para Visa**: Análisis detallado de tu perfil migratorio con recomendaciones personalizadas ($10 Estándar / $15 Expreso)\n\n**2. Formularios DS-160**: Asistencia profesional en el llenado del formulario de solicitud de visa de no-inmigrante\n\n**3. Formularios I-130**: Ayuda con peticiones de familiares inmediatos para residencia permanente\n\n**4. Consulta Virtual**: Asesoría personalizada por videollamada con nuestros especialistas\n\n**5. Formularios de Reunificación Familiar**: Asistencia con todos los formularios necesarios para reunificar a tu familia\n\n**6. Consulta Presencial**: Reunión cara a cara con nuestros expertos en nuestras oficinas",
    featured: true
  },
  {
    id: 4,
    category: "Sobre Nuestros Servicios",
    question: "¿Garantizan la aprobación de mi visa o petición?",
    answer: "NO. Ningún servicio privado puede garantizar la aprobación de una visa americana o petición migratoria. Las decisiones finales son tomadas exclusivamente por los oficiales consulares y USCIS del Gobierno de los Estados Unidos. Nuestro servicio consiste en evaluación informativa, orientación y asistencia técnica con formularios.",
    featured: true
  },

  // SECCIÓN 2: CALIFICACIÓN PARA VISA
  {
    id: 5,
    category: "Calificación para Visa",
    question: "¿Qué incluye el servicio de Calificación para Visa?",
    answer: "Nuestro servicio de calificación incluye:\n• Análisis detallado de tu perfil migratorio\n• Evaluación de tus lazos económicos, sociales y familiares\n• Identificación de fortalezas y debilidades en tu caso\n• Recomendaciones personalizadas para mejorar tus posibilidades\n• Orientación sobre documentación sugerida\n• Consejos para la entrevista consular\n• Evaluación de probabilidad de éxito"
  },
  {
    id: 6,
    category: "Calificación para Visa",
    question: "¿Cuáles son las modalidades y precios de la calificación?",
    answer: "Ofrecemos dos modalidades:\n\n**ESTÁNDAR**: $10 USD - Resultado en 2-3 horas\n**EXPRESO**: $15 USD - Resultado en 1-2 horas\n\nAmbas modalidades incluyen el mismo análisis completo, la diferencia está únicamente en el tiempo de entrega del reporte."
  },
  {
    id: 7,
    category: "Calificación para Visa",
    question: "¿Puedo usar la calificación si fui negado anteriormente?",
    answer: "Sí, absolutamente. De hecho, si fuiste negado anteriormente, nuestra calificación puede ayudarte a:\n• Identificar las posibles razones de la negativa\n• Evaluar si tu situación ha cambiado significativamente\n• Determinar si es prudente volver a aplicar\n• Prepararte mejor para un nuevo intento\n• Fortalecer los aspectos débiles de tu perfil"
  },

  // SECCIÓN 3: FORMULARIOS DS-160
  {
    id: 8,
    category: "Formularios DS-160",
    question: "¿Qué es el formulario DS-160?",
    answer: "El DS-160 es el formulario oficial de solicitud de visa de no-inmigrante del Departamento de Estado de Estados Unidos. Es requerido para visas de turista (B-2), negocios (B-1), estudiante (F-1), intercambio (J-1), entre otras. Debe completarse en línea antes de la entrevista consular."
  },
  {
    id: 9,
    category: "Formularios DS-160",
    question: "¿Cómo me ayudan con el DS-160?",
    answer: "Brindamos asistencia profesional que incluye:\n• Guía paso a paso en el llenado del formulario\n• Revisión de información antes de enviar\n• Orientación sobre qué información es importante destacar\n• Ayuda para evitar errores comunes que pueden causar problemas\n• Asesoría sobre cómo responder preguntas sensibles\n• Verificación de consistencia en toda la información"
  },
  {
    id: 10,
    category: "Formularios DS-160",
    question: "¿Ustedes llenan el DS-160 por mí?",
    answer: "No directamente. El formulario DS-160 es un documento oficial que debe ser completado por el solicitante bajo su propia responsabilidad. Nosotros brindamos asistencia técnica, orientación y supervisión durante el proceso, pero la información y el envío final son responsabilidad del solicitante."
  },

  // SECCIÓN 4: FORMULARIOS I-130
  {
    id: 11,
    category: "Formularios I-130",
    question: "¿Qué es el formulario I-130?",
    answer: "El I-130 es la Petición de Familiar Extranjero que se presenta ante USCIS (Servicio de Ciudadanía e Inmigración de Estados Unidos). Lo utiliza un ciudadano estadounidense o residente permanente para solicitar que un familiar inmediato obtenga una visa de inmigrante (Green Card)."
  },
  {
    id: 12,
    category: "Formularios I-130",
    question: "¿Quiénes pueden ser peticionados con el I-130?",
    answer: "Los ciudadanos estadounidenses pueden peticionar a:\n• Cónyuge\n• Hijos solteros (menores y mayores de 21 años)\n• Hijos casados\n• Padres (si el peticionario tiene 21+ años)\n• Hermanos\n\nLos residentes permanentes pueden peticionar a:\n• Cónyuge\n• Hijos solteros (menores y mayores de 21 años)"
  },
  {
    id: 13,
    category: "Formularios I-130",
    question: "¿Qué incluye su servicio de asistencia con I-130?",
    answer: "Nuestro servicio incluye:\n• Evaluación de elegibilidad\n• Asistencia en el llenado completo del formulario\n• Orientación sobre evidencia requerida\n• Lista de documentos de soporte necesarios\n• Revisión antes del envío\n• Instrucciones de dónde y cómo enviar la petición\n• Orientación sobre pasos siguientes después de la aprobación"
  },

  // SECCIÓN 5: CONSULTAS
  {
    id: 14,
    category: "Consultas",
    question: "¿Cuál es la diferencia entre consulta virtual y presencial?",
    answer: "**Consulta Virtual**:\n• Realizada por videollamada (Zoom, Meet, WhatsApp)\n• Más flexible en horarios\n• No requiere desplazamiento\n• Ideal para consultas rápidas o personas fuera de la ciudad\n\n**Consulta Presencial**:\n• Reunión cara a cara en nuestras oficinas\n• Permite revisión física de documentos\n• Interacción directa y personal\n• Ideal para casos complejos o personas que prefieren el contacto directo"
  },
  {
    id: 15,
    category: "Consultas",
    question: "¿Cuánto dura una consulta y qué puedo preguntar?",
    answer: "Las consultas típicamente duran entre 45-60 minutos. Puedes preguntar sobre:\n• Evaluación de tu caso específico\n• Qué tipo de visa o proceso te conviene más\n• Dudas sobre formularios y documentación\n• Estrategias para fortalecer tu caso\n• Preocupaciones sobre negativas anteriores\n• Cualquier aspecto relacionado con procesos migratorios hacia EE.UU."
  },
  {
    id: 16,
    category: "Consultas",
    question: "¿Necesito agenda previa para una consulta?",
    answer: "Sí, todas las consultas (virtuales y presenciales) requieren cita previa. Esto nos permite:\n• Dedicarte el tiempo necesario sin interrupciones\n• Prepararnos adecuadamente para tu caso\n• Revisar información preliminar si la envías previamente\n• Garantizar disponibilidad de nuestros especialistas\n\nPuedes agendar a través de nuestro sitio web o canales de contacto."
  },

  // SECCIÓN 6: REUNIFICACIÓN FAMILIAR
  {
    id: 17,
    category: "Reunificación Familiar",
    question: "¿Qué es la reunificación familiar?",
    answer: "La reunificación familiar es el proceso por el cual ciudadanos estadounidenses o residentes permanentes pueden traer a sus familiares elegibles a Estados Unidos. Incluye varios formularios y pasos dependiendo del parentesco y la situación migratoria del peticionario."
  },
  {
    id: 18,
    category: "Reunificación Familiar",
    question: "¿Qué formularios están involucrados en reunificación familiar?",
    answer: "Los formularios más comunes incluyen:\n• **I-130**: Petición de Familiar Extranjero\n• **I-485**: Ajuste de Estatus (si el familiar está en EE.UU.)\n• **DS-260**: Solicitud de Visa de Inmigrante (si está fuera de EE.UU.)\n• **I-864**: Declaración Jurada de Patrocinio Económico\n• **I-131**: Permiso de Viaje\n• **I-765**: Permiso de Trabajo\n\nNosotros te ayudamos a identificar cuáles necesitas y te asistimos en su preparación."
  },
  {
    id: 19,
    category: "Reunificación Familiar",
    question: "¿Cuánto tiempo toma el proceso de reunificación?",
    answer: "El tiempo varía significativamente según:\n• El tipo de relación familiar\n• Si el peticionario es ciudadano o residente\n• Si hay visas disponibles (categoría de preferencia)\n• La carga de trabajo de USCIS y el Centro Nacional de Visas\n\nPuede tomar desde varios meses hasta varios años. Durante la consulta evaluamos tu caso específico y te damos estimados más precisos."
  },

  // SECCIÓN 7: PAGOS Y REEMBOLSOS
  {
    id: 20,
    category: "Pagos y Reembolsos",
    question: "¿Cómo se procesan los pagos?",
    answer: "Los pagos se procesan de forma segura a través de plataformas de terceros autorizadas. Aceptamos:\n• Tarjetas de crédito (Visa, Mastercard, American Express)\n• Tarjetas de débito\n\nEn algunas transacciones, el pago puede ser procesado por un Merchant of Record. NO almacenamos información completa de tarjetas de crédito."
  },
  {
    id: 21,
    category: "Pagos y Reembolsos",
    question: "¿Los precios incluyen las tarifas gubernamentales?",
    answer: "NO. Nuestros servicios son completamente independientes de las tarifas gubernamentales. Las tarifas oficiales (como $185 USD para visa B1/B2, $535 para I-130, etc.) deben pagarse directamente a las autoridades estadounidenses a través de sus canales oficiales. Nuestros precios cubren únicamente nuestros servicios de orientación y asistencia."
  },
  {
    id: 22,
    category: "Pagos y Reembolsos",
    question: "¿Puedo obtener un reembolso?",
    answer: "Depende del servicio:\n\n**Calificación de Visa**: NO reembolsable una vez entregada la evaluación, excepto en casos de fallas técnicas comprobables.\n\n**Otros servicios**: Políticas de reembolso varían según el servicio y el grado de avance del trabajo. Consulta los términos específicos al contratar cada servicio.\n\nSiempre recomendamos revisar cuidadosamente qué incluye cada servicio antes de contratar."
  },

  // SECCIÓN 8: PROCESO Y REQUISITOS
  {
    id: 23,
    category: "Proceso y Requisitos",
    question: "¿Qué información necesito tener lista antes de contratar un servicio?",
    answer: "Depende del servicio, pero generalmente necesitarás:\n\n**Para Calificación**:\n• Datos personales básicos\n• Información laboral y económica\n• Historial de viajes\n• Lazos familiares\n\n**Para Formularios**:\n• Documentos de identidad\n• Información detallada de familiares\n• Evidencia de relaciones\n• Documentos financieros\n\n**Para Consultas**:\n• Descripción breve de tu situación\n• Documentos relevantes (si los tienes)"
  },
  {
    id: 24,
    category: "Proceso y Requisitos",
    question: "¿Puedo contratar servicios para otra persona?",
    answer: "Sí, puedes contratar servicios para un familiar o conocido, pero necesitarás:\n• Autorización de la persona (excepto para menores de edad)\n• Acceso a su información personal y documentos\n• Información precisa y completa\n\nRecomendamos que la persona interesada participe activamente en el proceso para garantizar la exactitud de los datos y la comprensión de las recomendaciones."
  },
  {
    id: 25,
    category: "Proceso y Requisitos",
    question: "¿En qué idioma se entregan los servicios?",
    answer: "Todos nuestros servicios se entregan en **español** para facilitar la comprensión completa. Sin embargo, cuando trabajamos con formularios oficiales en inglés, te ayudamos a entender cada pregunta y cómo responderla correctamente en el idioma requerido."
  },

  // SECCIÓN 9: SEGURIDAD Y PRIVACIDAD
  {
    id: 26,
    category: "Seguridad y Privacidad",
    question: "¿Mis datos personales están seguros?",
    answer: "Sí. Implementamos medidas de seguridad técnicas y organizativas razonables para proteger tu información personal. No compartimos, vendemos ni comercializamos datos personales. Toda la información se maneja de forma confidencial y solo se utiliza para los fines del servicio contratado. Para más detalles, consulta nuestra Política de Privacidad."
  },
  {
    id: 27,
    category: "Seguridad y Privacidad",
    question: "¿Qué hacen con mi información después del servicio?",
    answer: "Los datos personales se conservan únicamente durante el tiempo necesario para cumplir con los fines del servicio y las obligaciones legales aplicables. Después de ese periodo, la información es eliminada de forma segura. Tienes derecho a solicitar acceso, corrección o eliminación de tus datos en cualquier momento."
  },

  // SECCIÓN 10: ASPECTOS LEGALES
  {
    id: 28,
    category: "Aspectos Legales",
    question: "¿Son ustedes abogados de inmigración?",
    answer: "No. No somos abogados de inmigración ni proporcionamos asesoría legal. Nuestros servicios consisten en evaluación informativa, orientación general y asistencia técnica con formularios, basados en criterios públicos y experiencia acumulada en análisis de procesos migratorios. Para asesoría legal específica, recomendamos consultar con un abogado de inmigración licenciado."
  },
  {
    id: 29,
    category: "Aspectos Legales",
    question: "¿Pueden representarme ante USCIS o el consulado?",
    answer: "No. No ofrecemos servicios de representación legal ni acompañamiento a entrevistas consulares o citas de USCIS. No gestionamos trámites ante autoridades gubernamentales ni actuamos como intermediarios oficiales. Nuestro rol es de orientación y asistencia preparatoria."
  },
  {
    id: 30,
    category: "Aspectos Legales",
    question: "¿Sus evaluaciones o documentos tienen validez legal?",
    answer: "No. Nuestras evaluaciones y documentos son informativos y educativos, no tienen validez legal ante autoridades migratorias. Las decisiones oficiales solo las toman los oficiales consulares del Gobierno de Estados Unidos y USCIS. Nuestros servicios te preparan y orientan, pero no sustituyen el proceso oficial."
  }
];

function PreguntasFrecuentes() {
  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Obtener categorías únicas
  const getCategories = () => {
    const categories = [...new Set(faqData.map(item => item.category))];
    return categories;
  };

  const categories = ['Todas', ...getCategories()];

  // Filtrar FAQs por búsqueda y categoría
  const getFilteredFAQs = () => {
    let filtered = faqData;

    // Filtrar por categoría
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(term) || 
        item.answer.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    }

    return filtered;
  };

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFAQs = getFilteredFAQs();

  return (
    <>
      <Header />
      <section className="main-content-terminos">
        <div className="cont-margenes-laterales-2">
          
          {/* Título */}
          <div className="cont-titulo">
            <div className='titulos'>Preguntas Frecuentes</div>
            <p className='subtitulo-faq'>
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="cont-faq-completo">
            {/* Barra de búsqueda */}
            <div className="cont-busqueda-faq">
              <div className="input-busqueda-wrapper">
                <input
                  type="text"
                  className="input-busqueda-faq"
                  placeholder="Buscar preguntas... (ej: DS-160, visa, consulta)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="btn-limpiar-busqueda"
                    onClick={() => setSearchTerm('')}
                    aria-label="Limpiar búsqueda"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filtros por categoría */}
            <div className="cont-filtros-categoria">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn-categoria ${selectedCategory === category ? 'activo' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Contador de resultados */}
            {(searchTerm || selectedCategory !== 'Todas') && (
              <div className="cont-resultados-info">
                <p className="texto-resultados">
                  {filteredFAQs.length === 0 
                    ? 'No se encontraron resultados' 
                    : `Mostrando ${filteredFAQs.length} ${filteredFAQs.length === 1 ? 'resultado' : 'resultados'}`
                  }
                </p>
              </div>
            )}

            {/* Lista de preguntas */}
            <div className="cont-faq-lista">
              {filteredFAQs.length === 0 ? (
                <div className="no-resultados">
                  <p>No se encontraron preguntas que coincidan con tu búsqueda.</p>
                  <p>Intenta con otros términos o <button 
                    className="btn-reset-filtros" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('Todas');
                    }}
                  >
                    ver todas las preguntas
                  </button></p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className={`faq-item ${activeId === faq.id ? 'activo' : ''} ${faq.featured ? 'destacado' : ''}`}
                  >
                    {/* Encabezado de la pregunta */}
                    <button
                      className="faq-pregunta"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={activeId === faq.id}
                    >
                      <div className="faq-pregunta-contenido">
                        <span className="faq-categoria-badge">{faq.category}</span>
                        <h3 className="faq-pregunta-texto">{faq.question}</h3>
                      </div>
                      <span className={`faq-icono ${activeId === faq.id ? 'rotado' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>

                    {/* Contenido de la respuesta */}
                    <div className={`faq-respuesta ${activeId === faq.id ? 'abierto' : ''}`}>
                      <div className="faq-respuesta-contenido">
                        <p className="faq-respuesta-texto">
                          {faq.answer.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line.startsWith('•') ? (
                                <span className="lista-item">{line}</span>
                              ) : line.startsWith('**') && line.endsWith('**') ? (
                                <strong>{line.replace(/\*\*/g, '')}</strong>
                              ) : (
                                line
                              )}
                              {index < faq.answer.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Sección de contacto */}
            <div className="cont-contacto-faq">
              <div className="contacto-faq-card">
                <h3 className="contacto-titulo">¿No encontraste lo que buscabas?</h3>
                <p className="contacto-texto">
                  Si tienes alguna pregunta que no está respondida aquí, no dudes en contactarnos. 
                  Nuestro equipo está listo para ayudarte.
                </p>
                <div className="contacto-botones">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <button className="btn-contacto btn-whatsapp">
                      WhatsApp
                    </button>
                  </a>
                  <a href="mailto:info@visasunitedstates.com">
                    <button className="btn-contacto btn-email">
                     Email
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="disclaimer-importante">
              <h3 className="disclaimer-titulo">Aviso Importante</h3>
              <div className="disclaimer-contenido">
                <p className="disclaimer-texto">
                  Visas United State (VisasUS) es un servicio privado de evaluación informativa y orientación general.
                </p>
                <p className="disclaimer-texto">
                  <strong>No somos una agencia gubernamental, consulado ni embajada</strong>, ni estamos afiliados al Gobierno de los Estados Unidos.
                </p>
                <p className="disclaimer-texto">
                  <strong>No garantizamos la aprobación de visas.</strong> Las decisiones finales son tomadas exclusivamente por las autoridades migratorias correspondientes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default PreguntasFrecuentes;