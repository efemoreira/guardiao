import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEOSchemas from "@/components/common/SEOSchemas";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import ScrollDepthTracker from "@/components/shared/ScrollDepthTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Extintores e Recarga de Extintores em Fortaleza-CE | Guardião Extintores",
  description: "Recarga, inspeção e manutenção de extintores em Fortaleza e todo o Ceará. Mais de 14 anos de experiência, empresa parceira registrada no INMETRO. Peça um orçamento pelo WhatsApp.",
  keywords: "extintores, extintores no Ceará, extintores Fortaleza, recarga de extintores, recarga de extintores Fortaleza, recarga de extintores Ceará, manutenção de extintores, inspeção de extintores, proteção contra incêndio, sinalização de segurança",
  authors: [{ name: "Guardião Extintores" }],
  applicationName: "Guardião Extintores",
  creator: "Guardião Extintores",
  publisher: "Guardião Extintores",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://guardiaoextintores.com.br"),
  alternates: {
    canonical: "/",
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
    url: "https://guardiaoextintores.com.br",
    title: "Extintores e Recarga de Extintores em Fortaleza-CE | Guardião Extintores",
    description: "Recarga, inspeção e manutenção de extintores em Fortaleza e todo o Ceará. Mais de 14 anos de experiência, empresa parceira registrada no INMETRO.",
    siteName: "Guardião Extintores",
    images: [
      {
        url: "/img/herobanner2.jpg",
        width: 1200,
        height: 628,
        alt: "Guardião Extintores - Recarga e Manutenção de Extintores em Fortaleza-CE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extintores e Recarga de Extintores em Fortaleza-CE | Guardião Extintores",
    description: "Recarga, inspeção e manutenção de extintores em Fortaleza e todo o Ceará. Mais de 14 anos de experiência.",
    images: ["/img/herobanner2.jpg"],
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
        <GoogleAnalytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ScrollDepthTracker />
        {children}
      </body>
    </html>
  );
}