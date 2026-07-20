'use client';

import Link from 'next/link';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Página não encontrada
        </h2>

        <p className="mb-8 text-lg text-gray-600">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
          >
            <FiHome className="h-5 w-5" />
            Voltar ao início
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            <FiArrowLeft className="h-5 w-5" />
            Voltar
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Se acredita que isso é um erro, entre em contato conosco através do formulário de suporte.
          </p>
        </div>
      </div>
    </div>
  );
}
