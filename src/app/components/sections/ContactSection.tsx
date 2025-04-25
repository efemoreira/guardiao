import React from 'react';

export default function ContactSection() {
  return (
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
  );
}