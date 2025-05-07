import React, { useState } from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { quoteSectionStrings } from '../../lib/defaultStrings/quoteSectionStrings';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface ServiceOption {
  value: string;
  label: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  addressIcon?: string;
  phoneIcon?: string;
  emailIcon?: string;
}

interface CalloutInfo {
  icon?: string;
  title: string;
  phone: string;
}

export interface QuoteSectionProps {
  title?: string;
  formTitle?: string;
  contactTitle?: string;
  contactDescription?: string;
  serviceOptions?: ServiceOption[];
  contactInfo?: ContactInfo;
  callout?: CalloutInfo;
  submitButtonText?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  serviceSelectPlaceholder?: string;
  messagePlaceholder?: string;
  backgroundColor?: string;
  formBackgroundColor?: string;
  contactBackgroundColor?: string;
  primaryColor?: string;
  onSubmit?: (formData: FormState) => void;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({
  formTitle = quoteSectionStrings.formTitle,
  contactTitle = quoteSectionStrings.contactTitle,
  contactDescription = quoteSectionStrings.contactDescription,
  serviceOptions = quoteSectionStrings.serviceOptions,
  contactInfo = quoteSectionStrings.contactInfo,
  callout = quoteSectionStrings.callout,
  submitButtonText = quoteSectionStrings.submitButtonText,
  namePlaceholder = quoteSectionStrings.namePlaceholder,
  emailPlaceholder = quoteSectionStrings.emailPlaceholder,
  serviceSelectPlaceholder = quoteSectionStrings.serviceSelectPlaceholder,
  messagePlaceholder = quoteSectionStrings.messagePlaceholder,
  backgroundColor = quoteSectionStrings.backgroundColor,
  formBackgroundColor = quoteSectionStrings.formBackgroundColor,
  contactBackgroundColor = quoteSectionStrings.contactBackgroundColor,
  primaryColor = quoteSectionStrings.primaryColor,
  onSubmit
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Use a função personalizada de submissão, se fornecida
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Comportamento padrão
      console.log('Formulário enviado:', formData);
      alert('Formulário enviado com sucesso!');
    }
    
    // Reset formulário
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
    });
  };

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Formulário de Contato */}
          <motion.div 
            className="w-full lg:w-7/12 px-4 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`${formBackgroundColor} p-6 lg:p-8 shadow-md`}>
              <h3 className="text-2xl font-bold mb-6">{formTitle}</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder={namePlaceholder} 
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder={emailPlaceholder} 
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <select 
                    name="service" 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none bg-white"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{serviceSelectPlaceholder}</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <textarea 
                    name="message" 
                    placeholder={messagePlaceholder} 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary py-3 px-8 transition-all duration-300"
                >
                  {submitButtonText}
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Informações de Contato */}
          <motion.div 
            className="w-full lg:w-5/12 px-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`${contactBackgroundColor} p-6 lg:p-8 text-white h-full flex flex-col justify-between`}>
              <div>
                <h3 className="text-2xl font-bold mb-6">{contactTitle}</h3>
                
                <p className="mb-8">
                  {contactDescription}
                </p>
                
                <div className="mb-6">
                  {contactInfo.address && (
                    <p className="flex items-center mb-3">
                      <Icon icon={contactInfo.addressIcon || "FaMapMarkerAlt"} className={`mr-3 ${primaryColor}`} />
                      {contactInfo.address}
                    </p>
                  )}
                  {contactInfo.phone && (
                    <p className="flex items-center mb-3">
                      <Icon icon={contactInfo.phoneIcon || "FaPhoneAlt"} className={`mr-3 ${primaryColor}`} />
                      {contactInfo.phone}
                    </p>
                  )}
                  {contactInfo.email && (
                    <p className="flex items-center">
                      <Icon icon={contactInfo.emailIcon || "FaEnvelope"} className={`mr-3 ${primaryColor}`} />
                      {contactInfo.email}
                    </p>
                  )}
                </div>
              </div>
              
              {callout && (
                <div className="flex items-center">
                  <div className="bg-primary p-3 text-white mr-4">
                    <Icon icon={callout.icon || "FaHeadphones"} className="text-xl" />
                  </div>
                  <div>
                    <h6 className="text-sm">{callout.title}</h6>
                    <h3 className={`${primaryColor} font-bold text-xl`}>{callout.phone}</h3>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;