import React from 'react';

export default function FooterSection() {
  return (
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
  );
}