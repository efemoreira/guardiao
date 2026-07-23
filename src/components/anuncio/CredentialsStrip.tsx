import React from 'react';
import { Icon } from '../../utils/IconUtil';

// Credenciais reais e verificáveis (mesmas da TrustSection), em versão curta,
// exibidas logo abaixo do Hero para dar credibilidade imediata ao tráfego pago.
const credenciais = [
  'CNPJ ativo',
  'Parceiro registrado no INMETRO',
  'Treinamento com bombeiro civil',
  'Certificado de Conformidade CBMCE',
];

const CredentialsStrip: React.FC = () => {
  return (
    <section className="bg-secondary border-t border-white/10 py-3">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-200">
          {credenciais.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <Icon icon="FaCheckCircle" className="text-green-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CredentialsStrip;
