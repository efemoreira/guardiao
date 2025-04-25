import React from 'react';

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Proteja Já</h2>
            <p className="text-gray-400">Sua segurança é nossa prioridade</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Links Rápidos</h2>
            <nav aria-label="Links rápidos do rodapé">
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-400 hover:text-white" aria-label="Ir para seção sobre nós">Sobre</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white" aria-label="Ir para seção nossos serviços">Serviços</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white" aria-label="Ir para seção planos de assinatura">Planos</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Contato</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:+5599999999999" aria-label="Ligar para nosso telefone">(99) 99999-9999</a></li>
              <li><a href="mailto:contato@protejaja.com.br" aria-label="Enviar email para nós">contato@protejaja.com.br</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Redes Sociais</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com/guardiaoextintores" target="_blank" rel="noopener noreferrer" aria-label="Facebook Guardião Extintores">
                <span className="sr-only">Facebook</span>
                {/* Ícone do Facebook */}
              </a>
              <a href="https://instagram.com/guardiaoextintores" target="_blank" rel="noopener noreferrer" aria-label="Instagram Guardião Extintores">
                <span className="sr-only">Instagram</span>
                {/* Ícone do Instagram */}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Proteja Já. Todos os direitos reservados.
            <span className="mx-2">|</span>
            <a href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}