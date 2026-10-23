import React from 'react';
import type { IconType } from 'react-icons';
import {
  FaArrowRight, FaArrowUp, FaCalendarAlt, FaCalendarCheck, FaCertificate,
  FaCheck, FaCheckCircle, FaChurch, FaClipboardList, FaClock, FaEnvelope,
  FaFacebookF, FaFileInvoice, FaFireExtinguisher, FaHeadphones, FaInstagram,
  FaLinkedinIn, FaMapMarkerAlt, FaMinus, FaPaperPlane, FaPhone, FaPhoneAlt,
  FaPlus, FaQuoteLeft, FaRegBuilding, FaRegCheckCircle, FaSchool, FaShieldAlt,
  FaStamp, FaStore, FaTint, FaTools, FaTwitter, FaUserShield, FaUtensils, FaWhatsapp,
} from 'react-icons/fa';
// Named imports keep the full Font Awesome catalog out of the browser bundle.
const icons: Record<string, IconType> = {
  FaArrowRight, FaArrowUp, FaCalendarAlt, FaCalendarCheck, FaCertificate,
  FaCheck, FaCheckCircle, FaChurch, FaClipboardList, FaClock, FaEnvelope,
  FaFacebookF, FaFileInvoice, FaFireExtinguisher, FaHeadphones, FaInstagram,
  FaLinkedinIn, FaMapMarkerAlt, FaMinus, FaPaperPlane, FaPhone, FaPhoneAlt,
  FaPlus, FaQuoteLeft, FaRegBuilding, FaRegCheckCircle, FaSchool, FaShieldAlt,
  FaStamp, FaStore, FaTint, FaTools, FaTwitter, FaUserShield, FaUtensils, FaWhatsapp,
};
export const Icon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  const Component = icons[icon];
  return Component ? <Component className={className} aria-hidden="true" /> : null;
};
