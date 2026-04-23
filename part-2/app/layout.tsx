import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aprenda Python do zero | Asimov Academy",
  description:
    "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas de conteúdo, projetos reais com IA e certificado reconhecido pelo mercado.",
  keywords: ["Python", "IA", "programação", "curso online", "Asimov Academy"],
  openGraph: {
    title: "Aprenda Python do zero e construa projetos reais com IA",
    description:
      "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
