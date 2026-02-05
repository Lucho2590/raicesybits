import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Raíces & Bits | Próximamente",
  description: "Mobiliario infantil Montessori. Fusionamos la calidez de la madera artesanal con la innovación tecnológica. El futuro es orgánico.",
  keywords: ["montessori", "mobiliario infantil", "muebles de madera", "torre de aprendizaje", "triángulo pikler"],
  openGraph: {
    title: "Raíces & Bits | Próximamente",
    description: "Mobiliario infantil Montessori. El futuro es orgánico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
