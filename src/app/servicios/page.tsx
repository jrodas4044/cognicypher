import React from "react";
import {
  FaLightbulb,
  FaRocket,
  FaChartBar,
  FaCode,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";

interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  icono: React.ElementType;
}

const servicios: Servicio[] = [
  {
    id: 1,
    titulo: "Consultoría tecnológica",
    descripcion:
      "Evaluamos tu infraestructura, identificamos mejoras y desarrollamos planes estratégicos de TI personalizados. Optimizamos tus procesos tecnológicos para aumentar la eficiencia y competitividad.",
    icono: FaLightbulb,
  },
  {
    id: 2,
    titulo: "Transformación digital",
    descripcion:
      "Diseñamos e implementamos estrategias de digitalización integrales, gestionando el cambio organizacional. Revolucionamos tus operaciones y mejoramos la experiencia del cliente, manteniendo la seguridad y el cumplimiento normativo.",
    icono: FaRocket,
  },
  {
    id: 3,
    titulo: "Análisis de datos",
    descripcion:
      "Implementamos soluciones de Big Data y Business Intelligence para convertir tus datos en insights accionables. Nuestras herramientas de visualización facilitan la toma de decisiones estratégicas.",
    icono: FaChartBar,
  },
  {
    id: 4,
    titulo: "Desarrollo de software",
    descripcion:
      "Creamos soluciones de software a medida con diseños intuitivos. Ofrecemos desarrollo, mantenimiento y actualizaciones continuas, asegurando que tu software evolucione con tu negocio.",
    icono: FaCode,
  },
  {
    id: 5,
    titulo: "Seguridad de la información",
    descripcion:
      "Realizamos evaluaciones de riesgos e implementamos medidas de ciberseguridad avanzadas. Garantizamos el cumplimiento normativo y ofrecemos asesoramiento experto en regulaciones del sector.",
    icono: FaShieldAlt,
  },
  {
    id: 6,
    titulo: "Migración a la nube",
    descripcion:
      "Facilitamos tu transición a la nube de manera segura y eficiente. Implementamos y optimizamos soluciones cloud adaptadas, maximizando el rendimiento, la seguridad y la rentabilidad.",
    icono: FaCloud,
  },
];

const ServiciosPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-teal-700 mx-auto px-4 py-12 min-h-screen text-white">
      <main className="mx-auto container">
        <h1 className="mb-8 font-bold text-4xl text-center text-text.primary">
          Nuestros Servicios
        </h1>

        <div className="mb-12 text-center">
          <p className="mb-4 text-lg text-text.secondary">
            En CogniCypher, nos dedicamos a impulsar la innovación y el
            crecimiento de tu negocio a través de soluciones tecnológicas de
            vanguardia.
          </p>
          <p className="mb-4 text-lg text-text.secondary">
            Nuestro amplio abanico de servicios está diseñado para abordar los
            desafíos digitales más apremiantes de la actualidad, desde la
            transformación digital hasta la seguridad de la información.
          </p>

          <p className="mb-4 text-lg text-text.secondary">
            Nuestro enfoque integral optimiza tus operaciones y garantiza el
            cumplimiento normativo y la seguridad de tus activos digitales.
          </p>
          <p className="mb-4 font-semibold text-lg text-primary">
            En CogniCypher, no solo implementamos tecnología; creamos soluciones
            que impulsan tu negocio hacia el futuro.
          </p>
          <p className="text-lg text-text.secondary">
            Descubre cómo podemos transformar los desafíos en oportunidades y
            llevar tu negocio al siguiente nivel con CogniCypher.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="relative bg-slate-900 shadow-lg rounded-lg transition-transform duration-300 overflow-hidden hover:scale-105"
            >
              <div className="mb-12 p-6">
                <div className="flex items-center mb-3">
                  <servicio.icono className="mr-2 text-2xl text-teal-300" />
                  <h2 className="font-semibold text-teal-300 text-text.primary text-xl">
                    {servicio.titulo}
                  </h2>
                </div>
                <p className="text-text.secondary">{servicio.descripcion}</p>
              </div>
              <div className="bottom-0 absolute bg-gradient-to-r from-blue-500 hover:from-blue-600 to-teal-500 hover:to-teal-600 py-4 w-full x-6">
                <a
                  href="#"
                  className="px-6 font-medium text-primary hover:text-secondary"
                >
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServiciosPage;
