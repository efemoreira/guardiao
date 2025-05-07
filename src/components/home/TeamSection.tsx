import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { teamSectionStrings } from '../../lib/defaultStrings/teamSectionStrings';

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  delay?: number;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div 
      className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: member.delay || 0 }}
    >
      <div className="bg-white shadow-md group">
        <div className="relative overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Redes sociais */}
          <div className="absolute inset-0 bg-gray-700/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-2">
              {member.socialLinks.facebook && (
                <a 
                  href={member.socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Icon icon="FaFacebookF" />
                </a>
              )}
              {member.socialLinks.twitter && (
                <a 
                  href={member.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Icon icon="FaTwitter" />
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a 
                  href={member.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Icon icon="FaLinkedinIn" />
                </a>
              )}
              {member.socialLinks.instagram && (
                <a 
                  href={member.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Icon icon="FaInstagram" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="py-4 text-center">
          <h5 className="text-xl font-bold mb-1">{member.name}</h5>
          <p className="text-gray-600">{member.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC<TeamSectionProps> = ({
  title = teamSectionStrings.title,
  subtitle = teamSectionStrings.subtitle,
  members = teamSectionStrings.members
}) => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-medium mb-2">{subtitle}</h6>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          {members.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;