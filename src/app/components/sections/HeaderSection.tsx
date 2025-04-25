import React from 'react';

export default function HeaderSection() {
  return (
    <header className="bg-red-600 text-white p-6 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Proteja Já</h1>
        <nav className="space-x-6 mt-4 md:mt-0">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#servicos" className="hover:underline">Serviços</a>
          <a href="#funciona" className="hover:underline">Como Funciona</a>
          <a href="#planos" className="hover:underline">Planos</a>
          <a href="#simulador" className="hover:underline">Simulador</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}
