import React from "react";
import Section from "@/components/Section";

const NosotrosPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-teal-700 mx-auto px-4 py-12 min-h-screen text-white">
      <main className="mx-auto px-4 container">
        <Section title="Nosotros">
          <p className="mb-6 text-lg text-secondary">
            En CogniCypher, somos más que una empresa de tecnología; somos
            arquitectos del futuro digital. Fundada en 2015 por un grupo de
            visionarios tecnológicos, nuestra empresa ha crecido hasta
            convertirse en un referente en soluciones digitales innovadoras.
          </p>
          <p className="mb-6 text-lg text-secondary">
            Nuestro equipo está formado por expertos apasionados y altamente
            cualificados en diversas áreas de la tecnología, desde
            desarrolladores de software y analistas de datos hasta consultores
            de ciberseguridad y especialistas en transformación digital. Esta
            diversidad de talentos nos permite abordar los desafíos más
            complejos con un enfoque multidisciplinario y creativo.
          </p>
          <p className="mb-6 text-lg text-secondary">
            En CogniCypher, creemos en el poder de la tecnología para
            transformar negocios y mejorar vidas. Nos esforzamos por mantenernos
            a la vanguardia de las últimas tendencias e innovaciones,
            invirtiendo continuamente en investigación y desarrollo para ofrecer
            soluciones de última generación a nuestros clientes.
          </p>
          <p className="mb-6 text-lg text-secondary">
            Nuestra cultura se basa en la colaboración, la innovación y el
            aprendizaje continuo. Fomentamos un ambiente de trabajo que estimula
            la creatividad y el pensamiento crítico, permitiendo a nuestro
            equipo desarrollar soluciones verdaderamente revolucionarias.
          </p>
        </Section>

        <Section title="Visión">
          <p className="mb-6 text-lg text-secondary">
            Nuestra visión es ser líderes globales en la creación de un futuro
            digital más inteligente, seguro y eficiente. Aspiramos a ser
            catalizadores de la innovación, impulsando la transformación digital
            en todas las industrias y contribuyendo a un mundo más conectado y
            sostenible.
          </p>
        </Section>

        <Section title="Misión">
          <ul className="space-y-2 mb-6 text-lg text-secondary list-disc list-inside">
            <li>
              <span className="font-semibold">
                Proporcionar servicios y soluciones de la más alta calidad
              </span>{" "}
              que impulsen el crecimiento y la eficiencia de nuestros clientes.
            </li>
            <li>
              <span className="font-semibold">
                Mantenernos a la vanguardia de la innovación tecnológica
              </span>
              , anticipando y adaptándonos constantemente a las necesidades
              cambiantes del mercado.
            </li>
            <li>
              <span className="font-semibold">
                Fomentar una cultura de aprendizaje continuo
              </span>{" "}
              y excelencia profesional entre nuestros empleados.
            </li>
            <li>
              <span className="font-semibold">
                Promover prácticas éticas y sostenibles
              </span>{" "}
              en todo lo que hacemos, contribuyendo positivamente a la sociedad
              y al medio ambiente.
            </li>
            <li>
              <span className="font-semibold">
                Construir relaciones duraderas con nuestros clientes
              </span>
              , basadas en la confianza, la transparencia y el valor mutuo.
            </li>
          </ul>
          <p className="text-lg text-secondary">
            En CogniCypher, no solo imaginamos el futuro; lo construimos. Únete
            a nosotros en este viaje hacia un mundo más inteligente y conectado.
          </p>
        </Section>
      </main>
    </div>
  );
};

export default NosotrosPage;
