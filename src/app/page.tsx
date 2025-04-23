'use client';
import React from "react";

export default function FireExtinguisherLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-red-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Proteja Já</h1>
          <nav className="space-x-4 mt-4 md:mt-0">
            <a href="#planos" className="hover:underline">Planos</a>
            <a href="#funciona" className="hover:underline">Como Funciona</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 p-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proteção Contra Incêndios ao Seu Alcance</h2>
          <p className="text-lg mb-6">Mais de 10% de aumento nos incêndios em 2024. Não espere acontecer: previna-se com nossos planos anuais de segurança.</p>
          <a href="#planos" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition">Veja os Planos</a>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="p-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Planos de Assinatura</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Plano Básico */}
            <div className="border rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Plano Essencial</h4>
              <p className="text-2xl font-bold mb-4">R$96/ano</p>
              <ul className="text-left space-y-2 mb-4">
                <li>- 1 recarga de extintor 6kg ABC</li>
                <li>- Desconto em serviços adicionais</li>
                <li>- Lembrete automático de vencimento</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-medium">Assinar</button>
            </div>
            {/* Plano Intermediário */}
            <div className="border rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Plano Proteção+</h4>
              <p className="text-2xl font-bold mb-4">R$120/ano</p>
              <ul className="text-left space-y-2 mb-4">
                <li>- 1 recarga + 1 placa + 1 demarcação</li>
                <li>- Desconto progressivo em mais serviços</li>
                <li>- Acompanhamento personalizado</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-medium">Assinar</button>
            </div>
            {/* Plano Avançado */}
            <div className="border rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Plano Empresa</h4>
              <p className="text-2xl font-bold mb-4">R$192/ano</p>
              <ul className="text-left space-y-2 mb-4">
                <li>- Até 2 recargas + 2 placas + 2 demarcações</li>
                <li>- Atendimento prioritário</li>
                <li>- Desconto exclusivo para múltiplos extintores</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-medium">Assinar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="funciona" className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Como Funciona</h3>
          <ol className="text-left max-w-xl mx-auto space-y-4">
            <li><strong>1.</strong> Você escolhe o plano ideal.</li>
            <li><strong>2.</strong> Agendamos visita para entrega ou vistoria.</li>
            <li><strong>3.</strong> Acompanhamos validade e necessidades.</li>
            <li><strong>4.</strong> Você recebe alertas e descontos exclusivos.</li>
          </ol>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Fale Conosco</h3>
          <p className="mb-4">Dúvidas, sugestões ou quer assinar? Entre em contato:</p>
          <a href="https://wa.me/5599999999999" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">Falar no WhatsApp</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Proteja Já — Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
