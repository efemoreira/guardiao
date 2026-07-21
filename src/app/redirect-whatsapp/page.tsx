'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateWhatsAppLink } from '@/lib/utils/utils';

function RedirectWhatsAppContent() {
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');
  const message = searchParams.get('message');
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown === 0) {
      if (phone) {
        const whatsappLink = generateWhatsAppLink(phone, message || undefined);
        window.location.href = whatsappLink;
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, phone, message]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="max-w-md text-center px-4">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4">
            <svg
              className="animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                className="text-primary"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Você será redirecionado para o WhatsApp
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Você será direcionado ao WhatsApp para conversar com nosso bot e podermos marcar um horário.
        </p>

        <div className="bg-primary/10 border border-primary rounded-lg p-6">
          <p className="text-primary font-semibold mb-4">
            Redirecionando em...
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">{countdown}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Se não for redirecionado automaticamente, clique no botão abaixo.
        </p>

        <button
          onClick={() => {
            if (phone) {
              const whatsappLink = generateWhatsAppLink(phone, message || undefined);
              window.location.href = whatsappLink;
            }
          }}
          className="mt-6 inline-flex items-center gap-2 bg-primary text-white py-3 px-8 font-bold hover:opacity-90 transition duration-300 rounded"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.998 1.488c-1.552.821-3.07 2.056-4.321 3.597C2.22 12.557 1.5 14.6 1.5 16.8c0 1.577.269 3.1.75 4.514l-1.738 6.32c-.149.544.261 1.068.815 1.068.096 0 .194-.01.291-.03l6.317-1.74c1.414.48 2.937.75 4.514.75C22.3 30.5 30 23.21 30 14c0-1.577-.27-3.1-.75-4.514l1.738-6.32c.149-.544-.261-1.068-.815-1.068a1.056 1.056 0 00-.291.03l-6.317 1.74z" />
          </svg>
          Abrir WhatsApp agora
        </button>
      </div>
    </div>
  );
}

export default function RedirectWhatsApp() {
  return (
    <Suspense fallback={null}>
      <RedirectWhatsAppContent />
    </Suspense>
  );
}
