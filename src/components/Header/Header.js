import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Importando um ícone de seta
import './Header.css';

import logo from '../../assets/images/software-house-caiua-de-mello-logo.png';

// Componente para o novo botão "Entre em Contato"
const ContactButton = ({ isMobile = false }) => {
    return (
        <a href="#contact" className={`header-button ${isMobile ? 'mobile' : ''}`}>
            <motion.span 
                className="button-text"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
            >
                Entre em Contato
            </motion.span>
            <motion.span 
                className="button-icon"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
            >
                <FiArrowRight />
            </motion.span>
        </a>
    );
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Links de navegação atualizados
  const navLinks = [
    { title: 'Home', href: '#hero' },
    { title: 'WhiteLabel', href: '#whitelabel' },
    { title: 'Agente IA', href: '#agente-ia' },
    // Adicione um link para Planos se tiver uma seção de preços dedicada
    // { title: 'Planos', href: '#pricing' }, 
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      <header className="header-container">
        <a className="logo-link" href="#hero">
          <img alt="Software House Caiuã De Mello Logo" className="logo-image" src={logo} />
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href}>{link.title}</a>
          ))}
        </nav>

        <div className="desktop-cta">
          <ContactButton />
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <motion.div animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 5 : 0 }} className="hamburger-line"/>
          <motion.div animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} transition={{ duration: 0.1 }} className="hamburger-line"/>
          <motion.div animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -5 : 0 }} className="hamburger-line"/>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-dropdown"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {navLinks.map((link) => (
              <motion.a key={link.title} href={link.href} variants={menuItemVariants} onClick={toggleMobileMenu}>
                {link.title}
              </motion.a>
            ))}
            <motion.div variants={menuItemVariants}>
              <ContactButton isMobile={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;