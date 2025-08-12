import React from 'react';
import { Icon } from '../../utils/IconUtil';
import Link from 'next/link';
import { footerStrings } from '../../lib/defaultStrings/footerStrings';
import { generateWhatsAppLink } from '../../lib/utils/utils';

// Definição dos tipos para as props do Footer
interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface FooterLink {
  text: string;
  url: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface CopyrightInfo {
  companyName: string;
  links: FooterLink[];
}

interface FooterProps {
  showContactColumn?: boolean;
  showServicesColumn?: boolean;
  showQuickLinksColumn?: boolean;
  showNewsletterColumn?: boolean;
  contactInfo?: ContactInfo;
  socialMediaLinks?: SocialMediaLink[];
  servicesColumn?: FooterColumnProps;
  quickLinksColumn?: FooterColumnProps;
  newsletterTitle?: string;
  newsletterText?: string;
  newsletterPlaceholder?: string;
  copyright?: CopyrightInfo;
  customColumns?: React.ReactNode[];
  backgroundImage?: string; // URL da imagem de fundo
}

// Componentes auxiliares para cada seção do Footer
const SocialMediaLinks: React.FC<{ links: SocialMediaLink[] }> = ({ links }) => (
  <div className="flex pt-2">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded border border-white flex items-center justify-center mr-2 hover:bg-primary hover:border-primary transition-all duration-300"
      >
        <Icon icon={link.icon} />
      </a>
    ))}
  </div>
);

const ContactSection: React.FC<{ contactInfo: ContactInfo; socialMediaLinks: SocialMediaLink[] }> = ({ 
  contactInfo, 
  socialMediaLinks 
}) => (
  <div>
    <h4 className="text-xl font-bold mb-4">Endereço</h4>
    <p className="flex items-center mb-2">
      <Icon icon="FaMapMarkerAlt" className="mr-3 text-lg" />
      {contactInfo.address}
    </p>
    <p className="flex items-center mb-2">
      <Icon icon="FaPhoneAlt" className="mr-3 text-lg" />
      <a 
        href={generateWhatsAppLink(contactInfo.phone, "Olá! Gostaria de saber mais sobre os serviços da Guardião Extintores.")}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        {contactInfo.phone}
      </a>
    </p>
    <p className="flex items-center mb-2">
      <Icon icon="FaEnvelope" className="mr-3 text-lg" />
      {contactInfo.email}
    </p>
    <SocialMediaLinks links={socialMediaLinks} />
  </div>
);

const LinksColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    {links.map((link, index) => (
      <Link 
        key={index} 
        href={link.url} 
        className="block py-2 text-white hover:text-primary transition-colors"
      >
        {link.text}
      </Link>
    ))}
  </div>
);

const NewsletterSection: React.FC<{ title: string; text: string; placeholder: string }> = ({ 
  title, 
  text, 
  placeholder 
}) => (
  <div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="mb-4">{text}</p>
    <form className="relative">
      <input
        type="email"
        placeholder={placeholder}
        className="w-full py-3 px-4 bg-white text-secondary rounded-md focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 bg-primary h-full px-4 rounded-r-md flex items-center justify-center hover:bg-opacity-90"
      >
        <Icon icon="FaPaperPlane" />
      </button>
    </form>
  </div>
);

const CopyrightSection: React.FC<{ copyright: CopyrightInfo }> = ({ copyright }) => (
  <div className="py-4 border-t border-gray-700" style={{ position: 'relative', zIndex: 2 }}>
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p>&copy; {new Date().getFullYear()} <Link href="/" className="text-primary hover:underline">{copyright.companyName}</Link>, Todos os Direitos Reservados.</p>
      </div>
      <div className="flex">
        {copyright.links.map((link, index) => (
          <Link key={index} href={link.url} className="mx-2 hover:text-primary transition-colors">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const defaultFooterProps: Required<FooterProps> = {
  showContactColumn: footerStrings.showContactColumn,
  showServicesColumn: footerStrings.showServicesColumn,
  showQuickLinksColumn: footerStrings.showQuickLinksColumn,
  showNewsletterColumn: footerStrings.showNewsletterColumn,
  contactInfo: footerStrings.contactInfo,
  socialMediaLinks: footerStrings.socialMediaLinks,
  servicesColumn: footerStrings.servicesColumn,
  quickLinksColumn: footerStrings.quickLinksColumn,
  newsletterTitle: footerStrings.newsletterTitle,
  newsletterText: footerStrings.newsletterText,
  newsletterPlaceholder: footerStrings.newsletterPlaceholder,
  copyright: footerStrings.copyright,
  customColumns: [],
  backgroundImage: footerStrings.backgroundImage
};

// Ajusta o número de colunas no grid com base no número de colunas visíveis
const getGridColumnsClass = (columnsCount: number): string => {
  switch (columnsCount) {
    case 0:
      return "";
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 md:grid-cols-2";
    case 3:
      return "grid-cols-1 md:grid-cols-3";
    case 4:
    default:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  }
};

// Componente Footer principal
const Footer: React.FC<FooterProps> = (props) => {
  // Mesclar props fornecidas com valores padrão
  const footerProps = { ...defaultFooterProps, ...props };
  
  // Determinar quais colunas estão ativas
  const columns: React.ReactNode[] = [];
  
  if (footerProps.showContactColumn) {
    columns.push(
      <ContactSection 
        key="contact"
        contactInfo={footerProps.contactInfo} 
        socialMediaLinks={footerProps.socialMediaLinks} 
      />
    );
  }
  
  if (footerProps.showServicesColumn) {
    columns.push(
      <LinksColumn 
        key="services"
        title={footerProps.servicesColumn.title}
        links={footerProps.servicesColumn.links} 
      />
    );
  }
  
  if (footerProps.showQuickLinksColumn) {
    columns.push(
      <LinksColumn 
        key="quick-links"
        title={footerProps.quickLinksColumn.title}
        links={footerProps.quickLinksColumn.links} 
      />
    );
  }
  
  if (footerProps.showNewsletterColumn) {
    columns.push(
      <NewsletterSection 
        key="newsletter"
        title={footerProps.newsletterTitle}
        text={footerProps.newsletterText}
        placeholder={footerProps.newsletterPlaceholder}
      />
    );
  }
  
  // Adicionar colunas personalizadas, se houver
  if (footerProps.customColumns && footerProps.customColumns.length > 0) {
    columns.push(...footerProps.customColumns);
  }
  
  // Determinar a classe de grade com base no número de colunas
  const gridClass = getGridColumnsClass(columns.length);
  
  // Se não houver colunas, apenas exibir o copyright
  const showColumnsSection = columns.length > 0;
  
  // Estilos para o background do footer
  const backgroundStyle = footerProps.backgroundImage 
    ? { 
        backgroundImage: `url(${footerProps.backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }
    : {};
  
  return (
    <footer 
      className={`bg-secondary text-white pt-10`}
      style={{
        ...backgroundStyle,
        position: 'relative', // Usar sem cast, já que é um valor válido CSS
      }}
    >
      {footerProps.backgroundImage && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 30, 62, 0.582)',
            zIndex: 1,
          }}
        />
      )}
      {showColumnsSection && (
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 2 }}>
          <div className={`grid ${gridClass} gap-8 py-8`}>
            {columns}
          </div>
        </div>
      )}
      <CopyrightSection copyright={footerProps.copyright} />
    </footer>
  );
};

export default Footer;