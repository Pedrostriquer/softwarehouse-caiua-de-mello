import React from 'react';
import { motion } from 'framer-motion';
import './AiAgentSection.css';

// Ícones SVG para os cards de funcionalidades (sem alteração)
const LeadsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 20V10M12 20V4M7 20V14" stroke="white" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const AdsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 12C14.5 12 18.5 12 20.5 12C22.5 12 22.5 15 20.5 15C18.5 15 14.5 15 14.5 15M14.5 12L17.5 9M14.5 12L17.5 15" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H11.5M4 12C2 12 2 9 4 9C6 9 6 12 4 12ZM4 12C2 12 2 15 4 15C6 15 6 12 4 12Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const MessagingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
  </svg>
);


const AiAgentSection = () => {
    // Animação para o container dos widgets (efeito cascata)
    const platformVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };

    // Animação para cada card/widget individual
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
<section className="ai-agent-section" id="agente-ia">
            <motion.div 
                className="ai-text-content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="ai-title">Agente de IA para Atendimento ao Cliente</h2>
                <p className="ai-subtitle">Uma plataforma inteligente para visualizar, classificar e engajar seus leads. Receba contatos de anúncios e automatize disparos com eficiência.</p>
            </motion.div>
            <motion.div
                className="ai-platform-card"
                variants={platformVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="card__border"></div>
                <motion.div className="feature-widget" variants={itemVariants}>
                    <div className="widget-icon"><LeadsIcon /></div>
                    <div className="widget-text"><h4 className="widget-title">Visualize e Classifique Leads</h4><p className="widget-description">Painel intuitivo para organizar e priorizar seus contatos.</p></div>
                </motion.div>
                <motion.div className="feature-widget" variants={itemVariants}>
                    <div className="widget-icon"><AdsIcon /></div>
                    <div className="widget-text"><h4 className="widget-title">Integração com Anúncios</h4><p className="widget-description">Receba leads diretamente das suas campanhas de marketing.</p></div>
                </motion.div>
                <motion.div className="feature-widget" variants={itemVariants}>
                    <div className="widget-icon"><MessagingIcon /></div>
                    <div className="widget-text"><h4 className="widget-title">Disparos Automatizados</h4><p className="widget-description">Engaje seus leads com mensagens personalizadas e automáticas.</p></div>
                </motion.div>
            </motion.div>

            {/* --- NOVA SEÇÃO DE PREÇOS --- */}
            <motion.div 
                className="pricing-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="pricing-cards-wrapper">
                    {/* PLANO BASIC */}
                    <div className="pricing-card">
                        <span className="plan-name">Basic</span>
                        <div className="plan-price">R$ 499<span className="price-period">/mês</span></div>
                        <p className="plan-description">Ideal para começar e validar seu projeto com as funcionalidades essenciais.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Até 5.000 disparos/mês</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Plataforma de Gestão de Leads</span></li>
                            <li className="card__list_item"><span className="list_text integration-fee">Taxa de Integração: R$ 1.500</span></li>
                        </ul>
                        <button className="button">Começar Agora</button>
                    </div>

                    {/* PLANO ADVANCED (DESTAQUE) */}
                    <div className="pricing-card highlighted">
                        <div className="card__border"></div>
                        <div className="popular-badge">Mais Popular</div>
                        <span className="plan-name">Advanced</span>
                        <div className="plan-price">R$ 999<span className="price-period">/mês</span></div>
                        <p className="plan-description">Para negócios em crescimento que precisam de mais poder e automação.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Até 20.000 disparos/mês</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Plataforma de Gestão de Leads</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Integração com Anúncios</span></li>
                             <li className="card__list_item"><span className="list_text integration-fee">Taxa de Integração: R$ 1.000</span></li>
                        </ul>
                        <button className="button">Escolher Plano</button>
                    </div>

                    {/* PLANO ENTERPRISE */}
                    <div className="pricing-card">
                        <span className="plan-name">Enterprise</span>
                        <div className="plan-price">Customizado</div>
                        <p className="plan-description">Soluções sob medida para grandes volumes e necessidades específicas.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Disparos Ilimitados</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Plataforma e Integrações</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Suporte Dedicado</span></li>
                            <li className="card__list_item"><span className="list_text integration-fee">Taxa de Integração Inclusa</span></li>
                        </ul>
                        <button className="button">Fale Conosco</button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AiAgentSection;