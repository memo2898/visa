/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './PoliticaPrivacidad.css'

function PoliticaPrivacidad() {
  return (
    <>
        <Header/>
        <section className="main-content-privacidad">
        <div className="cont-margenes-laterales-2">
         
            <div className="cont-titulo">
                <div className='titulos'>Política de Privacidad</div>
            </div>

            <div className="cont-privacidad">
                {/**Ultima Actualizacion start */}
                <p className="text-ultima-actualizacion">
                    <strong>Última actualización:</strong> 21 de junio de 2024
                </p>
                {/**Ultima Actualizacion end */}

                {/**Acápite 1 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>1. Introducción</h2>
                    <p className="text-parrafos">
                        En Visas United State (VisasUS) valoramos y respetamos la privacidad de nuestros usuarios.
                    </p>
                    <p className="text-parrafos">
                        La presente Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal proporcionada a través de nuestro sitio web y servicios.
                    </p>
                    <p className="text-parrafos">
                        Visas United State (VisasUS) es una marca operada por <strong>NEFTECH SOLUTIONS S.R.L.</strong>, entidad responsable del tratamiento de los datos personales conforme a esta política.
                    </p>
                </div>
                {/**Acápite 1 end */}
                
                {/**Acápite 2 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>2. Información que Recopilamos</h2>
                    <p className="text-parrafos">
                        Podemos recopilar los siguientes tipos de información:
                    </p>

                    <div className="subseccion">
                        <p className="text-parrafos">
                            <strong>a. Información proporcionada directamente por el usuario</strong>
                        </p>
                        <ul className='lista-privacidad'>
                            <li className='elemento-lista'>Nombre y apellido</li>
                            <li className='elemento-lista'>Dirección de correo electrónico</li>
                            <li className='elemento-lista'>Información suministrada en formularios de evaluación</li>
                            <li className='elemento-lista'>Información de contacto</li>
                            <li className='elemento-lista'>Cualquier otro dato que el usuario decida proporcionar voluntariamente</li>
                        </ul>
                    </div>

                    <div className="subseccion">
                        <p className="text-parrafos">
                            <strong>b. Información de pago</strong>
                        </p>
                        <p className="text-parrafos text-indentado">
                            Los pagos son procesados exclusivamente por plataformas de terceros autorizadas (por ejemplo, Merchant of Record).
                        </p>
                        <p className="text-parrafos text-indentado text-destacado">
                            Visas United State (VisasUS) NO almacena datos completos de tarjetas de crédito o débito.
                        </p>
                    </div>
                </div>
                {/**Acápite 2 end */}

                {/**Acápite 3 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>3. Finalidad del Uso de la Información</h2>
                    <p className="text-parrafos">
                        La información recopilada se utiliza para:
                    </p>
                    <ul className='lista-privacidad'>
                        <li className='elemento-lista'>Proporcionar los servicios solicitados por el usuario</li>
                        <li className='elemento-lista'>Elaborar evaluaciones informativas personalizadas</li>
                        <li className='elemento-lista'>Comunicarnos con el usuario respecto a su solicitud o servicio</li>
                        <li className='elemento-lista'>Enviar notificaciones relacionadas con el servicio</li>
                        <li className='elemento-lista'>Mejorar nuestros servicios y la experiencia del usuario</li>
                        <li className='elemento-lista'>Cumplir obligaciones legales y contractuales</li>
                    </ul>
                </div>
                {/**Acápite 3 end */}

                {/**Acápite 4 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>4. Base Legal para el Tratamiento de Datos</h2>
                    <p className="text-parrafos">
                        Tratamos los datos personales basándonos en:
                    </p>
                    <ul className='lista-privacidad'>
                        <li className='elemento-lista'>El consentimiento explícito del usuario</li>
                        <li className='elemento-lista'>La ejecución de un contrato (prestación del servicio solicitado)</li>
                        <li className='elemento-lista'>El interés legítimo de mejorar nuestros servicios</li>
                        <li className='elemento-lista'>El cumplimiento de obligaciones legales</li>
                    </ul>
                </div>
                {/**Acápite 4 end */}

                {/**Acápite 5 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>5. Compartición de Información con Terceros</h2>
                    <p className="text-parrafos">
                        Podemos compartir información limitada únicamente con:
                    </p>
                    <ul className='lista-privacidad'>
                        <li className='elemento-lista'>Plataformas de pago y Merchant of Record, exclusivamente para procesar transacciones</li>
                        <li className='elemento-lista'>Proveedores tecnológicos necesarios para la operación del servicio</li>
                        <li className='elemento-lista'>Autoridades competentes, cuando sea requerido por ley</li>
                    </ul>
                    <p className="text-parrafos text-destacado">
                        Nunca vendemos, alquilamos ni comercializamos datos personales.
                    </p>
                </div>
                {/**Acápite 5 end */}

                {/**Acápite 6 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>6. Transferencias Internacionales de Datos</h2>
                    <p className="text-parrafos">
                        Al utilizar nuestros servicios, el usuario acepta que su información pueda ser procesada y almacenada en servidores ubicados fuera de su país de residencia, siempre bajo medidas de seguridad razonables y estándares internacionales de protección de datos.
                    </p>
                </div>
                {/**Acápite 6 end */}

                {/**Acápite 7 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>7. Seguridad de la Información</h2>
                    <p className="text-parrafos">
                        Implementamos medidas técnicas y organizativas razonables para proteger la información personal contra accesos no autorizados, pérdida, uso indebido o divulgación.
                    </p>
                    <p className="text-parrafos">
                        No obstante, ningún sistema es completamente seguro, por lo que no podemos garantizar seguridad absoluta.
                    </p>
                </div>
                {/**Acápite 7 end */}

                {/**Acápite 8 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>8. Conservación de Datos</h2>
                    <p className="text-parrafos">
                        Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con los fines para los cuales fueron recopilados o mientras exista una relación contractual o legal válida.
                    </p>
                </div>
                {/**Acápite 8 end */}

                {/**Acápite 9 start */}
                <div className="seccion-privacidad seccion-importante">
                    <h2 className='titulo-acap'>9. Derechos del Usuario</h2>
                    <p className="text-parrafos">
                        El usuario tiene derecho a:
                    </p>
                    <ul className='lista-privacidad lista-destacada'>
                        <li className='elemento-lista'>Acceder a sus datos personales</li>
                        <li className='elemento-lista'>Solicitar la corrección de datos inexactos</li>
                        <li className='elemento-lista'>Solicitar la eliminación de sus datos, cuando sea legalmente posible</li>
                        <li className='elemento-lista'>Retirar su consentimiento en cualquier momento</li>
                    </ul>
                    <p className="text-parrafos">
                        Las solicitudes pueden realizarse mediante los canales de contacto indicados en el Sitio.
                    </p>
                </div>
                {/**Acápite 9 end */}

                {/**Acápite 10 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>10. Cookies y Tecnologías Similares</h2>
                    <p className="text-parrafos">
                        El Sitio puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y optimizar el funcionamiento del servicio.
                    </p>
                    <p className="text-parrafos">
                        El usuario puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del Sitio.
                    </p>
                </div>
                {/**Acápite 10 end */}

                {/**Acápite 11 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>11. Información Sensible</h2>
                    <p className="text-parrafos text-destacado">
                        Visas United State (VisasUS) NO solicita ni requiere información considerada sensible como datos biométricos, información financiera completa, números de pasaporte o documentos oficiales, salvo que el usuario los proporcione voluntariamente bajo su responsabilidad.
                    </p>
                </div>
                {/**Acápite 11 end */}

                {/**Acápite 12 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>12. Enlaces a Sitios de Terceros</h2>
                    <p className="text-parrafos">
                        El Sitio puede contener enlaces a sitios web de terceros.
                    </p>
                    <p className="text-parrafos">
                        No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios.
                    </p>
                </div>
                {/**Acápite 12 end */}

                {/**Acápite 13 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>13. Privacidad de Menores</h2>
                    <p className="text-parrafos">
                        Nuestros servicios están dirigidos exclusivamente a personas mayores de 18 años.
                    </p>
                    <p className="text-parrafos">
                        No recopilamos intencionalmente información de menores de edad.
                    </p>
                </div>
                {/**Acápite 13 end */}

                {/**Acápite 14 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>14. Cambios a esta Política</h2>
                    <p className="text-parrafos">
                        Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento.
                    </p>
                    <p className="text-parrafos">
                        Las modificaciones serán efectivas a partir de su publicación en el Sitio.
                    </p>
                </div>
                {/**Acápite 14 end */}

                {/**Acápite 15 start */}
                <div className="seccion-privacidad">
                    <h2 className='titulo-acap'>15. Contacto</h2>
                    <p className="text-parrafos">
                        Para consultas relacionadas con esta Política de Privacidad, el usuario puede contactarnos a través de los medios indicados en el Sitio web oficial.
                    </p>
                </div>
                {/**Acápite 15 end */}

                {/**Acápite 16 start */}
                <div className="seccion-privacidad seccion-final">
                    <h2 className='titulo-acap'>16. Responsable del Tratamiento</h2>
                    <p className="text-parrafos">
                        <strong>NEFTECH SOLUTIONS S.R.L.</strong>
                    </p>
                    <p className="text-parrafos">
                        Operador legal de la marca Visas United State (VisasUS)
                    </p>
                </div>
                {/**Acápite 16 end */}

                {/**Disclaimer start */}
                <div className="disclaimer-importante">
                    <h3 className="disclaimer-titulo"> Aviso Importante</h3>
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
                        <p className="disclaimer-texto">
                            Los servicios ofrecidos consisten únicamente en análisis informativo y recomendaciones basadas en la información proporcionada por el usuario, conforme a criterios públicos y normativas migratorias vigentes.
                        </p>
                    </div>
                </div>
                {/**Disclaimer end */}

            </div>
         </div>
 
        </section>
        <Footer/>
    </>
  )
}

export default PoliticaPrivacidad