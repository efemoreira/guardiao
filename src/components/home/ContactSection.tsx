import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { contactSectionStrings } from '../../lib/defaultStrings/contactSectionStrings';

const ContactSection: React.FC = () => {
  const { title, subtitle, description, contactInfo, formLabels } = contactSectionStrings;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-primary uppercase font-medium mb-2">{subtitle}</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {/* Informações de contato */}
          <motion.div 
            className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 shadow-md rounded-md h-full">
              <h4 className="text-2xl font-semibold mb-6">{contactInfo.title}</h4>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Icon icon="FaMapMarkerAlt" className="text-primary text-xl" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{contactInfo.addressTitle}</h5>
                  <p className="text-gray-700">{contactInfo.address.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < contactInfo.address.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Icon icon="FaPhone" className="text-primary text-xl" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{contactInfo.phoneTitle}</h5>
                  <p className="text-gray-700">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Icon icon="FaEnvelope" className="text-primary text-xl" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{contactInfo.emailTitle}</h5>
                  <p className="text-gray-700">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-8">
                {contactInfo.socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-80 transition-all"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 shadow-md rounded-md">
              <h4 className="text-2xl font-semibold mb-6">{formLabels.title}</h4>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">{formLabels.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder={formLabels.placeholder.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">{formLabels.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder={formLabels.placeholder.email}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">{formLabels.phone}</label>
                    <input 
                      type="text" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder={formLabels.placeholder.phone}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">{formLabels.service}</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {formLabels.serviceOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">{formLabels.message}</label>
                  <textarea 
                    id="message" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32" 
                    placeholder={formLabels.placeholder.message}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {formLabels.submitButton}
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