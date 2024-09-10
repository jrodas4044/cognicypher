export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-teal-700 min-h-screen text-white">
      <header className="flex flex-col justify-center items-center px-4 py-16 min-h-screen text-center">
        <h1 className="bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 font-bold text-5xl text-transparent md:text-6xl lg:text-7xl">
          Bienvenido a Cognicypher
        </h1>
        <p className="mb-8 text-teal-200 text-xl md:text-2xl">
          Pioneros en IA aplicada a los negocios para PyMEs en Latinoamérica
        </p>
        <button className="bg-gradient-to-r from-teal-500 hover:from-teal-600 to-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl mb-12 px-8 py-4 rounded-full font-bold text-lg text-white transition duration-300">
          Inicia tu Transformación Digital
        </button>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="bg-white/20 shadow-md hover:shadow-lg backdrop-blur-sm p-6 rounded-lg w-full md:w-auto transition duration-300">
            <h3 className="mb-2 font-semibold text-2xl text-teal-300">+500</h3>
            <p className="text-blue-200">PyMEs Transformadas</p>
          </div>
          <div className="bg-white/20 shadow-md hover:shadow-lg backdrop-blur-sm p-6 rounded-lg w-full md:w-auto transition duration-300">
            <h3 className="mb-2 font-semibold text-2xl text-teal-300">98%</h3>
            <p className="text-blue-200">Satisfacción del Cliente</p>
          </div>
          <div className="bg-white/20 shadow-md hover:shadow-lg backdrop-blur-sm p-6 rounded-lg w-full md:w-auto transition duration-300">
            <h3 className="mb-2 font-semibold text-2xl text-teal-300">
              5 años
            </h3>
            <p className="text-blue-200">Liderando la Innovación</p>
          </div>
        </div>
        <div className="text-teal-300 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      <main className="mx-auto px-4 py-16 container">
        <section className="items-center gap-12 grid md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-semibold text-3xl text-teal-300">
              Transformación Digital Inteligente
            </h2>
            <p className="mb-6 text-blue-100 text-lg">
              Cognicypher es tu socio estratégico en la revolución digital.
              Ofrecemos soluciones de consultoría avanzadas, impulsadas por IA,
              para potenciar el crecimiento de tu PyME.
            </p>
            <button className="bg-gradient-to-r from-blue-500 hover:from-blue-600 to-teal-500 hover:to-teal-600 shadow-md hover:shadow-lg px-6 py-3 rounded-full font-bold text-white transition duration-300">
              Descubre Nuestros Servicios
            </button>
          </div>
          <div className="bg-white/20 shadow-lg backdrop-blur-sm p-8 rounded-lg">
            <h3 className="mb-4 font-semibold text-2xl text-teal-300">
              Nuestra Visión
            </h3>
            <p className="text-blue-100 text-lg">
              Visualizamos un futuro donde cada PyME en Latinoamérica aprovecha
              al máximo el potencial de la tecnología digital y la IA. Somos el
              puente que conecta a las pequeñas y medianas empresas con las
              herramientas y conocimientos necesarios para prosperar en la era
              digital, fomentando la innovación, la eficiencia y el crecimiento
              sostenible.
            </p>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="mb-8 font-semibold text-3xl text-teal-300">
            ¿Por qué Cognicypher?
          </h2>
          <div className="gap-8 grid md:grid-cols-3">
            <div className="bg-white/10 shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300">
              <h3 className="mb-3 font-semibold text-blue-300 text-xl">
                Expertos en IA
              </h3>
              <p className="text-teal-100">
                Lideramos la aplicación de inteligencia artificial en soluciones
                empresariales
              </p>
            </div>
            <div className="bg-white/10 shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300">
              <h3 className="mb-3 font-semibold text-blue-300 text-xl">
                Enfoque Personalizado
              </h3>
              <p className="text-teal-100">
                Soluciones adaptadas a las necesidades únicas de tu PyME
              </p>
            </div>
            <div className="bg-white/10 shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300">
              <h3 className="mb-3 font-semibold text-blue-300 text-xl">
                Resultados Medibles
              </h3>
              <p className="text-teal-100">
                Impulsamos tu crecimiento con estrategias basadas en datos
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
