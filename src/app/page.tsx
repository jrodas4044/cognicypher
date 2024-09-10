import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start gap-8 row-start-2">
        <h1 className="font-bold text-3xl">Bienvenido a Cognicypher</h1>
        <p>
          Cognicypher es una empresa dedicada a ofrecerte soluciones de
          transformación digital para tu pequeña o mediana empresa.
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="mt-4 font-semibold text-xl">Nuestra Visión</h2>
          <p className="text-center sm:text-left">
            En Cognicypher, visualizamos un futuro donde cada PyME en
            Latinoamérica pueda aprovechar al máximo el potencial de la
            tecnología digital. Nos esforzamos por ser el puente que conecta a
            las pequeñas y medianas empresas con las herramientas y
            conocimientos necesarios para prosperar en la era digital,
            fomentando la innovación, la eficiencia y el crecimiento sostenible.
          </p>
        </div>
      </main>
    </div>
  );
}
