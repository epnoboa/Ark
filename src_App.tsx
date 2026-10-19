--- src/App.tsx (原始)
export default function App() {
  return (
    <div/>
  );
}


+++ src/App.tsx (修改后)
import { useState, useEffect } from 'react'

// ============================================
// CONFIGURACIÓN - CAMBIA ESTOS VALORES
// ============================================
const CONFIG = {
  // Número de WhatsApp con código de país (Ecuador: 593)
  whatsappNumber: '593999999999',
  // Mensaje predeterminado de WhatsApp
  whatsappMessage: 'Hola, me interesa conocer más sobre sus servicios de arquitectura en Guayaquil.',

  // ============================================
  // URL DEL FORMULARIO EMBEBIDO
  // Reemplaza esta URL con la de tu formulario
  // (Google Forms, Typeform, Jotform, etc.)
  // ============================================
  formularioURL: 'https://www.google.com/forms/d/e/TU_ID_DE_FORMULARIO/viewform?embedded=true',

  // Nombre del negocio
  nombre: 'ArquiGuayaquil',
  // Email de contacto
  email: 'contacto@arquiguayaquil.com',
  // Dirección
  direccion: 'Guayaquil, Guayas, Ecuador',
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`

  const servicios = [
    {
      icono: 'fa-city',
      titulo: 'Trámites Municipales',
      descripcion: 'Gestionamos todos tus trámites ante el municipio de Guayaquil de forma rápida y eficiente. Permiso de construcción, habilitación y más.',
    },
    {
      icono: 'fa-drafting-compass',
      titulo: 'Diseño de Planos',
      descripcion: 'Elaboramos planos arquitectónicos, estructurales, eléctricos e hidráulicos con la más alta calidad y normativa vigente.',
    },
    {
      icono: 'fa-hard-hat',
      titulo: 'Asesoría Técnica',
      descripcion: 'Te brindamos orientación profesional para tu proyecto. Evaluación de terrenos, factibilidad y soluciones constructivas.',
    },
    {
      icono: 'fa-calculator',
      titulo: 'Presupuestos',
      descripcion: 'Elaboración de presupuestos detallados y análisis de costos para que tu inversión sea transparente y controlada.',
    },
    {
      icono: 'fa-building',
      titulo: 'Dirección de Obras',
      descripcion: 'Supervisión técnica profesional durante toda la ejecución de tu proyecto, garantizando calidad y cumplimiento de plazos.',
    },
    {
      icono: 'fa-paint-roller',
      titulo: 'Remodelaciones',
      descripcion: 'Transformamos tus espacios con diseños innovadores. Remodelaciones residenciales y comerciales en toda Guayaquil.',
    },
    {
      icono: 'fa-file-signature',
      titulo: 'Permisos',
      descripcion: 'Obtención de permisos de construcción, demoliciones, ampliaciones y regularizaciones ante entidades competentes.',
    },
    {
      icono: 'fa-ruler-combined',
      titulo: 'Levantamientos',
      descripcion: 'Levantamientos arquitectónicos y topográficos con tecnología de precisión para tu proyecto en Guayaquil.',
    },
  ]

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* HEADER / NAVEGACIÓN */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <i className="fas fa-building text-white text-lg"></i>
              </div>
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                {CONFIG.nombre}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>Servicios</a>
              <a href="#nosotros" className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>Nosotros</a>
              <a href="#contacto" className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>Contacto</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/30"
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-2xl shadow-xl p-6 mt-2 border border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium py-2">Servicios</a>
                <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium py-2">Nosotros</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium py-2">Contacto</a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-5 py-3 rounded-full text-center font-semibold"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-300 text-sm font-medium">Servicios profesionales en Guayaquil</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display',serif] font-bold text-white leading-tight mb-6">
            Tu Proyecto de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Arquitectura
            </span>
            <br />Comienza Aquí
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Somos expertos en diseño arquitectónico, trámites municipales y dirección de obras en Guayaquil.
            Hacemos realidad tus proyectos con profesionalismo y calidad garantizada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 flex items-center gap-3"
            >
              <i className="fab fa-whatsapp text-2xl group-hover:animate-bounce"></i>
              Cotiza Gratis por WhatsApp
            </a>
            <a
              href="#servicios"
              className="group border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Ver Servicios
              <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-amber-400"></i>
              <span className="text-sm">Profesionales Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-amber-400"></i>
              <span className="text-sm">Respuesta Inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-star text-amber-400"></i>
              <span className="text-sm">+500 Proyectos Exitosos</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-gray-900 mb-4">
              Soluciones Arquitectónicas<br />Completas en Guayaquil
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ofrecemos un portafolio integral de servicios para cubrir todas las necesidades de tu proyecto arquitectónico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300">
                  <i className={`fas ${servicio.icono} text-xl text-amber-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{servicio.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{servicio.descripcion}</p>
              </article>
            ))}
          </div>

          {/* CTA intermedio */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  ¿Necesitas una cotización personalizada?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Cuéntanos sobre tu proyecto y te daremos un presupuesto sin compromiso. ¡Respuesta en menos de 24 horas!
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  Solicitar Cotización Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS / POR QUÉ ELEGIRNOS */}
      <section id="nosotros" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                ¿Por qué elegirnos?
              </span>
              <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-gray-900 mb-6">
                Experiencia y Compromiso en Cada Proyecto
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Con años de experiencia en el sector de la construcción en Guayaquil, ofrecemos soluciones
                integrales que van desde el diseño hasta la entrega final de tu proyecto. Nuestro equipo
                de profesionales garantiza resultados de calidad.
              </p>

              <div className="space-y-4">
                {[
                  { icon: 'fa-check-circle', text: 'Profesionales registrados y certificados' },
                  { icon: 'fa-check-circle', text: 'Conocimiento profundo de la normativa de Guayaquil' },
                  { icon: 'fa-check-circle', text: 'Atención personalizada y seguimiento continuo' },
                  { icon: 'fa-check-circle', text: 'Precios competitivos y transparentes' },
                  { icon: 'fa-check-circle', text: 'Cumplimiento de plazos garantizado' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className={`fas ${item.icon} text-amber-500 text-lg`}></i>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">+500</div>
                    <div className="text-gray-600 text-sm">Proyectos Realizados</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">+10</div>
                    <div className="text-gray-600 text-sm">Años de Experiencia</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">100%</div>
                    <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">24h</div>
                    <div className="text-gray-600 text-sm">Tiempo de Respuesta</div>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO - WHATSAPP */}
      <section id="contacto" className="py-20 sm:py-28 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Contacto Directo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-gray-900 mb-4">
              Escríbenos por WhatsApp
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              La forma más rápida de contactarnos. Respuesta inmediata para resolver todas tus dudas sobre tu proyecto.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-green-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-whatsapp text-4xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Listo para comenzar?</h3>
              <p className="text-gray-600 mb-8">
                Haz clic en el botón y comienza una conversación directa con nuestro equipo.
                Te atenderemos de inmediato.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 w-full justify-center"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                Iniciar Conversación
              </a>
              <p className="text-gray-400 text-sm mt-4">
                <i className="fas fa-lock mr-1"></i>
                Conversación segura y confidencial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO EMBEBIDO */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Formulario de Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-gray-900 mb-4">
              Envíanos tu Consulta
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Completa el siguiente formulario con los detalles de tu proyecto y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-sm">
              {/*
                =============================================
                INSTRUCCIONES PARA INCRUSTAR TU FORMULARIO:
                =============================================
                1. Ve a la plataforma donde creaste tu formulario
                2. Busca la opción "Incrustar" o "Embed"
                3. Copia la URL del iframe
                4. Reemplaza el valor de 'formularioURL' en la
                   sección CONFIG al inicio de este archivo
                   (línea ~14 del archivo App.tsx)

                Si usas Google Forms:
                - Abre tu formulario > Enviar > Ícono <>
                - Copia la URL del src del iframe

                Si usas Typeform:
                - Config > Publish > Share > Embed

                Si usas Jotform:
                - Setup & Embed > Embed Form > Source code
                =============================================
              */}
              <iframe
                src={CONFIG.formularioURL}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Formulario de contacto - Servicios de Arquitectura en Guayaquil"
                className="rounded-2xl bg-white"
              >
                Cargando formulario…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <i className="fas fa-building text-white text-lg"></i>
                </div>
                <span className="font-bold text-xl">{CONFIG.nombre}</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Servicios profesionales de arquitectura en Guayaquil.
                Tu proyecto en las mejores manos.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Trámites Municipales</a></li>
                <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Diseño de Planos</a></li>
                <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Dirección de Obras</a></li>
                <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Remodelaciones</a></li>
                <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Permisos y Levantamientos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-amber-500"></i>
                  <span>{CONFIG.direccion}</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-amber-500"></i>
                  <a href={`mailto:${CONFIG.email}`} className="hover:text-amber-400 transition-colors">{CONFIG.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fab fa-whatsapp text-amber-500"></i>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">WhatsApp Directo</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {CONFIG.nombre}. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Servicios de Arquitectura en Guayaquil, Ecuador
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¡Escríbenos!
        </span>
      </a>
    </div>
  )
}

export default App
