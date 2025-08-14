import React, { useState } from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion, AnimatePresence } from 'framer-motion';
import { contactSectionStrings, ContactInfo, FormLabels } from '../../lib/defaultStrings/contactSectionStrings';
import { generateWhatsAppLink } from '../../lib/utils/utils';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  contactInfo?: ContactInfo;
  formLabels?: FormLabels;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = contactSectionStrings.title,
  subtitle = contactSectionStrings.subtitle,
  description = contactSectionStrings.description,
  contactInfo = contactSectionStrings.contactInfo,
  formLabels = contactSectionStrings.formLabels,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Preparar os dados do formulário
      const dataToSend = {
        ...formData,
        service: formData.service || "Serviço não escolhido"
      };
      
      // Endpoint do Google Script para processar o formulário
      await fetch('https://script.google.com/macros/s/AKfycbyJDiDaCJ6enbsr-5LHculNCRZqgL7HghB68ae5mN9pzHeeCz7mP8fJjc7HMIi3Aiff8w/exec', {
        method: 'POST',
        mode: 'no-cors',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(dataToSend),
      });

      setIsSuccess(true);
      setShowSuccess(true);
      
      // Resetar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
        setTimeout(() => setIsSuccess(false), 300);
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-500 uppercase font-bold mb-3">
            {subtitle}
          </h6>
          <h2 className="text-3xl md:text-4xl font-black mb-5">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl mx-auto text-gray-600">
              {description}
            </p>
          )}
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {/* Informações de contato */}
          <motion.div 
            className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h4 className="text-2xl font-semibold mb-6">{contactInfo.title}</h4>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Icon icon="FaMapMarkerAlt" className="text-cyan-500 text-xl" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{contactInfo.addressTitle}</h5>
                  <p className="text-gray-600">{contactInfo.address.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < contactInfo.address.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Icon icon="FaPhone" className="text-cyan-500 text-xl" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{contactInfo.phoneTitle}</h5>
                  <a 
                    href={generateWhatsAppLink(contactInfo.phone, "Olá! Gostaria de saber mais sobre os serviços da Guardião Extintores.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-500 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Icon icon="FaEnvelope" className="text-cyan-500 text-xl" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{contactInfo.emailTitle}</h5>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-8">
                {contactInfo.socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-opacity-80 transition-all"
                  >
                    <Icon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Formulário de contato */}
          <motion.div 
            className="w-full lg:w-2/3 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-semibold mb-6">{formLabels.title}</h4>
              
              {/* Mensagem de Sucesso */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ 
                      opacity: showSuccess ? 1 : 0, 
                      y: showSuccess ? 0 : -20,
                      scale: showSuccess ? 1 : 0.95 
                    }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Icon icon="FaCheckCircle" className="text-green-500 text-xl" />
                      </div>
                      <div className="ml-3">
                        <p className="text-green-800 font-medium">
                          Mensagem enviada com sucesso!
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                          Entraremos em contato em breve.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-600 mb-2">{formLabels.name}</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed" 
                      placeholder={formLabels.placeholder.name}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-600 mb-2">{formLabels.email}</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed" 
                      placeholder={formLabels.placeholder.email}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-600 mb-2">{formLabels.phone}</label>
                    <input 
                      type="text" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed" 
                      placeholder={formLabels.placeholder.phone}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-600 mb-2">{formLabels.service}</label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      {formLabels.serviceOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-600 mb-2">{formLabels.message}</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-32 disabled:bg-gray-100 disabled:cursor-not-allowed" 
                    placeholder={formLabels.placeholder.message}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    formLabels.submitButton
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;