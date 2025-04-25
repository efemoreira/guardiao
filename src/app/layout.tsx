import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEOSchemas from "@/components/common/SEOSchemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guardião Extintores | Proteção Contra Incêndio Profissional",
  description: "Especialistas em proteção contra incêndio com mais de 10 anos de experiência. Oferecemos extintores, recargas, inspeções e soluções completas para a segurança do seu estabelecimento.",
  keywords: "extintores, proteção contra incêndio, recarga de extintores, inspeções de segurança, extintores de incêndio, sinalização de segurança",
  authors: [{ name: "Guardião Extintores" }],
  applicationName: "Guardião Extintores",
  creator: "Guardião Extintores",
  publisher: "Guardião Extintores",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://guardiao-extintores.com.br"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://guardiao-extintores.com.br",
    title: "Guardião Extintores | Proteção Contra Incêndio Profissional",
    description: "Especialistas em proteção contra incêndio com mais de 10 anos de experiência. Extintores, recargas e inspeções.",
    siteName: "Guardião Extintores",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guardião Extintores - Proteção Contra Incêndio Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardião Extintores | Proteção Contra Incêndio",
    description: "Especialistas em proteção contra incêndio com mais de 10 anos de experiência.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <SEOSchemas />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}