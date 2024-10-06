import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";
import Script from "next/script";
import CookieConsent, { Cookies } from "react-cookie-consent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cognicypher",
  description: "Inteligencia Aplicada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gradient-to-r from-gray-900 via-blue-950 to-teal-700 shadow-lg p-6">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <h1 className="mb-4 md:mb-0 font-bold text-2xl text-teal-300">
              <Link
                href="/"
                className="hover:text-blue-300 transition duration-300"
              >
                <Image
                  src="/logo.png"
                  alt="Cognicypher Logo"
                  className="w-52 h-auto"
                  width={100}
                  height={100}
                />
              </Link>
            </h1>
            <nav className="w-full md:w-auto">
              <ul className="flex md:flex-row flex-col items-center gap-4 md:gap-6">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 md:p-0 text-white hover:text-teal-300 transition duration-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/list"
                    className="block px-4 py-2 md:p-0 text-white hover:text-teal-300 transition duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-teal-700 py-10 text-white">
          <div className="mx-auto px-4 container">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
              {/* Columna 1: Nombre e imagen */}
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src="/logo.png"
                  alt="Cognicypher Logo"
                  className="w-52 h-auto"
                  width={100}
                  height={100}
                />
                <p className="pt-4 text-blue-100">
                  Ofrecemos soluciones personalizadas en consultoría
                  tecnológica, transformación digital, análisis de datos,
                  desarrollo de software y migración a la nube.{" "}
                </p>
              </div>

              {/* Columna 2: Menú principal */}
              <div>
                <h4 className="mb-4 font-semibold text-teal-300 text-xl">
                  Navegación
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-blue-300 hover:text-teal-300 transition duration-300"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="text-blue-300 hover:text-teal-300 transition duration-300"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nosotros"
                      className="text-blue-300 hover:text-teal-300 transition duration-300"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="text-blue-300 hover:text-teal-300 transition duration-300"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Columna 3: Servicios destacados */}
              <div>
                <h4 className="mb-4 font-semibold text-teal-300 text-xl">
                  Nuestros Servicios
                </h4>
                <ul className="space-y-2">
                  <li className="text-blue-100">Consultoría en IA</li>
                  <li className="text-blue-100">Transformación Digital</li>
                  <li className="text-blue-100">Análisis de Datos</li>
                  <li className="text-blue-100">Desarrollo de Software</li>
                </ul>
              </div>

              {/* Columna 4: Redes sociales y contacto */}
              <div>
                <h4 className="mb-4 font-semibold text-teal-300 text-xl">
                  Contáctanos
                </h4>
                <p className="mb-2 text-blue-100">
                  Email: info@cognicypher.com
                </p>
                <p className="mb-4 text-blue-100">Teléfono: +123 456 7890</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-300 hover:text-teal-300 transition duration-300"
                  >
                    <i className="fa-facebook-f fab"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-teal-300 transition duration-300"
                  >
                    <i className="fa-twitter fab"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-teal-300 transition duration-300"
                  >
                    <i className="fa-linkedin-in fab"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-teal-200">
                © 2024 Cognicypher - Inteligencia Aplicada. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </footer>

        <CookieConsent
          location="bottom"
          buttonText="¡Claro que sí!"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario.{" "}
          <span style={{ fontSize: "10px" }}>Este texto es más pequeño :O</span>
        </CookieConsent>
      </body>
      <GoogleAnalytics gaId="G-JS4CV1B79S" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2597010418711064"
      />
    </html>
  );
}
