import React from 'react';
import { motion } from 'framer-motion';
import './FeatureSection.css';

// Ícones SVG para os cards menores
const TokenizationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14H5V12H7V14Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11 10H9V8H11V10Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11 18H9V16H11V18Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M15 14H13V12H15V14Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M19 10H17V8H19V10Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4 11V7L8 4L12 7V11M8 8V12L12 15L16 12V8L12 5L8 8Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 8L20 11V15L16 18L12 15" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const ContractsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18H20M15 14H20M15 10H20" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6V18C4 19.1046 4.89543 20 6 20H12M4 6C4 4.89543 4.89543 4 6 4H10.5L14 8H12C10.8954 8 10 8.89543 10 10V20" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const FeatureSection = () => {
    // Variantes para animação de entrada
    const cardAnimation = {
        initial: { opacity: 0, y: 50, scale: 0.95 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 }
    };

  return (
<section className="feature-section" id="whitelabel">
      <motion.div 
        className="feature-text-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="feature-title">Soluções White Label para Captação de Recursos</h2>
        <p className="feature-subtitle">
          Potencialize seu negócio com nossa plataforma financeira personalizada, projetada para a venda de contratos e tokenização de ativos.
        </p>
      </motion.div>
      
      <div className="features-grid">
        {/* Card Principal - Maior */}
        <motion.div
            className="card main-feature-card"
            {...cardAnimation} // Aplica a animação de entrada
            transition={{ ...cardAnimation.transition, delay: 0.2 }}
        >
            <div className="card__border"></div>
            <div className="card_title__container">
                <span className="card_title">Plataforma Financeira Completa</span>
                <p className="card_paragraph">
                    Tudo que você precisa para lançar seu projeto e captar recursos de forma segura, com a sua própria marca.
                </p>
            </div>
            <hr className="line" />
            <ul className="card__list">
                <li className="card__list_item">
                    <span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span>
                    <span className="list_text">Emissão e Gestão de Tokens</span>
                </li>
                <li className="card__list_item">
                    <span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span>
                    <span className="list_text">Venda de Contratos Digitais</span>
                </li>
                <li className="card__list_item">
                    <span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span>
                    <span className="list_text">Dashboard para Investidores</span>
                </li>
            </ul>
            <button className="button">Agende uma Chamada</button>
        </motion.div>

        {/* Card de Destaque (+70M) */}
        <motion.div
            className="sub-feature-card highlight-card"
            {...cardAnimation}
            transition={{ ...cardAnimation.transition, delay: 0.4 }}
        >
          <div className="highlight-value">+70M</div>
          <h4 className="sub-feature-title">Movimentados</h4>
          <p className="sub-feature-text">em nossa plataforma white label, validando a robustez e confiança da nossa solução.</p>
        </motion.div>
        
        {/* Card de Suporte 2 */}
        <motion.div
            className="sub-feature-card"
            {...cardAnimation}
            transition={{ ...cardAnimation.transition, delay: 0.5 }}
        >
          <div className="sub-feature-icon"><TokenizationIcon /></div>
          <h4 className="sub-feature-title">Tokenização</h4>
          <p className="sub-feature-text">Converta qualquer ativo em tokens digitais para liquidez imediata.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;