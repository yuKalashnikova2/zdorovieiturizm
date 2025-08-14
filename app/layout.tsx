import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates, Manrope } from "next/font/google";
import "./globals.scss";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat-alt",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Здоровье и туризм",
  description:
    "Подберём лучшую клинику в Турции по вашим критериям. Пересадка волос FUE, DHI, лечение зубов, пластические операции, нейрохирургия. Клиники в Стамбул, Измир, Анталья.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable} ${manrope.variable}`}
      >
        <div className="container">
          <div className="wrapper">
            <Header />
            {children}
            <Footer />
            </div>
        </div>
      </body>
    </html>
  );
}
