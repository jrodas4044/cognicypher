import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        <header className="flex justify-between items-center bg-gray-100 dark:bg-slate-800 shadow mb-10 p-4 rounded-lg">
          <h1>
            <Link href="/">Cognicypher</Link>
          </h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/blog/list">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <div className="flex flex-col justify-center items-center mx-auto py-10 container">
            <p>© 2024 Todos los derechos reservados</p>
            <p>
              <a href="#">Cognicypher - Inteligencia Aplicada</a>
            </p>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-JS4CV1B79S" />
    </html>
  );
}
