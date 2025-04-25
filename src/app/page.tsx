'use client';
import React from "react";
import Simulador from "./simulador";
import Planos from "./planos";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
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

      {/* Hero Banner */}
      <section className="pt-24 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Proteção Contra Incêndio Profissional</h2>
              <p className="text-xl mb-8">Garantimos sua segurança com soluções completas e atendimento especializado</p>
              <a href="#planos" className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Conheça Nossos Planos
              </a>
            </div>
            <div className="hidden md:block">
              {/* Aqui você pode adicionar uma imagem ilustrativa */}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Sobre Nós</h3>
          <p className="text-lg text-gray-600 mb-8">
            Com mais de 10 anos de experiência, somos especialistas em proteção contra incêndio.
            Nossa missão é garantir a segurança do seu estabelecimento com soluções profissionais e atendimento personalizado.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-semibold mb-2">Experiência</h4>
              <p className="text-gray-600">10+ anos no mercado</p>
            </div>
            <div>
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-2">Clientes</h4>
              <p className="text-gray-600">+1000 clientes atendidos</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-xl font-semibold mb-2">Qualidade</h4>
              <p className="text-gray-600">100% certificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🧯</div>
              <h4 className="text-xl font-semibold mb-2">Extintores</h4>
              <p className="text-gray-600">Venda, manutenção e recarga</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">👀</div>
              <h4 className="text-xl font-semibold mb-2">Inspeções</h4>
              <p className="text-gray-600">Vistorias técnicas regulares</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Sinalização</h4>
              <p className="text-gray-600">Placas e demarcação de solo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="text-xl font-semibold mb-2">Consultoria</h4>
              <p className="text-gray-600">Orientação especializada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Nossos Planos</h3>
          <Planos/>
        </div>
        <div className="text-center mt-12">
          <a href="#simulador" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Simule Agora
          </a>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="funciona" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Como Funciona</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Escolha o Plano</h4>
              <p className="text-gray-600">Selecione o melhor plano para sua necessidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Agende uma Visita</h4>
              <p className="text-gray-600">Nossos especialistas irão até você</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Receba o Atendimento</h4>
              <p className="text-gray-600">Realizamos todos os serviços necessários</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Fique Tranquilo</h4>
              <p className="text-gray-600">Sua segurança está garantida com a gente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section id="simulador" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Simulador de Economia</h3>
          <Simulador />
        </div>
      </section>

      {/* Fale Conosco */}
      <section id="contato" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Fale Conosco</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <a href="https://wa.me/5599999999999" className="text-red-600 hover:underline">
                (99) 99999-9999
              </a>
            </div>
            <div>
              <div className="text-3xl mb-4">📧</div>
              <h4 className="font-semibold mb-2">E-mail</h4>
              <a href="mailto:contato@protejaja.com.br" className="text-red-600 hover:underline">
                contato@protejaja.com.br
              </a>
            </div>
            <div>
              <div className="text-3xl mb-4">📍</div>
              <h4 className="font-semibold mb-2">Endereço</h4>
              <p className="text-gray-600">Rua Exemplo, 123<br />São Paulo - SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Proteja Já</h4>
              <p className="text-gray-400">Sua segurança é nossa prioridade</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white">Serviços</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white">Planos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📱 (99) 99999-9999</li>
                <li>📧 contato@protejaja.com.br</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {/* Adicione seus ícones de redes sociais aqui */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Proteja Já. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
