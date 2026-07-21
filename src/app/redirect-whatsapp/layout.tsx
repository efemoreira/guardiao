import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecionando para o WhatsApp | Guardião Extintores',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RedirectWhatsAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
