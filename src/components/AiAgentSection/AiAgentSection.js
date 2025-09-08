import React from 'react';
import { motion } from 'framer-motion';
import './AiAgentSection.css';

// Ícones SVG
const LeadsIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20V10M12 20V4M7 20V14" stroke="white" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const AdsIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12C14.5 12 18.5 12 20.5 12C22.5 12 22.5 15 20.5 15C18.5 15 14.5 15 14.5 15M14.5 12L17.5 9M14.5 12L17.5 15" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12H11.5M4 12C2 12 2 9 4 9C6 9 6 12 4 12ZM4 12C2 12 2 15 4 15C6 15 6 12 4 12Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const MessagingIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CheckIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg> );

// O componente agora recebe a prop 'onPlanSelect' do App.js
const AiAgentSection = ({ onPlanSelect }) => {
    const platformVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    // Função para rolar até o footer e definir a mensagem
    const handlePlanClick = (planName) => {
        // Define a mensagem no estado do App.js, se a função for fornecida
        if (onPlanSelect) {
            onPlanSelect(`Olá, tenho interesse em contratar o ${planName}.`);
        }
        
        // Encontra o footer pelo ID e rola suavemente até ele
        const footer = document.getElementById('contact');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
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
                <p className="ai-subtitle">Nossa plataforma inteligente centraliza e automatiza a comunicação, transformando a maneira como você interage com seus leads e clientes.</p>
            </motion.div>
            
            <motion.div
                className="ai-platform-card"
                variants={platformVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="platform-card-intro">
                    <p className="platform-card-text">
                        Centralize seus canais de atendimento, integre com suas campanhas de marketing e deixe nossa IA fazer o trabalho pesado. Qualificamos, respondemos e engajamos seus contatos 24/7.
                    </p>
                    <div className="sales-highlight">
                        <span className="highlight-value">Até 400%</span>
                        <p className="highlight-description">de aumento nas vendas de nossos clientes</p>
                    </div>
                </div>
                <hr className="platform-divider" />

                <motion.div className="feature-widget" variants={itemVariants}>
                    <div className="widget-icon"><LeadsIcon /></div>
                    <div className="widget-text">
                        <h4 className="widget-title">Visualize e Classifique Leads</h4>
                        <p className="widget-description">Gerencie seus contatos em um painel visual estilo Kanban, adicione tags e acompanhe cada etapa da jornada do cliente de forma clara e eficiente.</p>
                    </div>
                </motion.div>
                <motion.div className="feature-widget" variants={itemVariants}>
                    <div className="widget-icon"><AdsIcon /></div>
                    <div className="widget-text">
                        <h4 className="widget-title">Integração com Anúncios</h4>
                        <p className="widget-description">Conecte-se diretamente com Meta Ads e Google Ads. Nossa IA responde aos leads em segundos, aumentando drasticamente a taxa de conversão.</p>
                    </div>
                </motion.div>
                <motion.div className="feature-widget" variants={itemVariants}>
                    <div className="widget-icon"><MessagingIcon /></div>
                    <div className="widget-text">
                        <h4 className="widget-title">Disparos Automatizados</h4>
                        <p className="widget-description">Crie fluxos de comunicação inteligentes, envie follow-ups automáticos e personalize mensagens em massa com variáveis para um engajamento pessoal.</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="pricing-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="pricing-cards-wrapper">
                    <div className="pricing-card">
                        <span className="plan-name">Atendimento Inteligente</span>
                        <p className="plan-description">O assistente virtual mais completo para recepção e suporte ao cliente.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Receber e responder mensagens de forma ilimitada</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Machine Learning IA interna da plataforma</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Entende e processa arquivos enviados pelo cliente</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Respostas ilimitadas em tempo real</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">API oficial do WhatsApp: Garantia e segurança</span></li>
                        </ul>
                        <div className="plan-pricing-details">
                            <span className="price-label">Implementação única:</span>
                            <span className="price-value">R$ 3.500,00</span>
                            <span className="price-label">Mensalidade:</span>
                            <span className="price-value">R$ 699,00</span>
                        </div>
                        <button className="button" onClick={() => handlePlanClick('Plano Atendimento Inteligente')}>Contratar</button>
                    </div>
                    <div className="pricing-card">
                        <span className="plan-name">Plano Básico</span>
                        <p className="plan-description">Para começar com a automação! Ideal para pequenas empresas que querem dar os primeiros passos na automatização de atendimento e vendas.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Admin com acesso a conversas, clientes, produtos, relatórios...</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Receber e responder mensagens de forma ilimitada</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Sem CRM, banco de dados local</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">5 logins de usuários</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Disparo de até 50 mensagens mensais</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Acesso a vendas e relatórios simples</span></li>
                        </ul>
                         <div className="plan-pricing-details">
                            <span className="price-label">Implementação única:</span>
                            <span className="price-value">R$ 3.500,00</span>
                            <span className="price-label">Mensalidade:</span>
                            <span className="price-value">R$ 699,00</span>
                        </div>
                        <button className="button" onClick={() => handlePlanClick('Plano Básico')}>Contratar</button>
                    </div>
                    <div className="pricing-card highlighted">
                        <span className="plan-name">Plano Profissional</span>
                        <p className="plan-description">Escalando o atendimento e vendas. Voltado para empresas em crescimento que precisam de mais recursos e relatórios detalhados.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Fine Tuning: treinamento da IA para sua empresa</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Até 2 números de WhatsApp. Envie e responda ilimitado</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">15 logins de usuários</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Disparo de até 500 mensagens mensais incluídos</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Admin profissional, com todas as funcionalidades</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Envio de áudios com voz pré-definida (até 30 palavras)</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Banco de dados local</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Relatórios com gráficos e estatísticas</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Integração com CRM sob consulta</span></li>
                        </ul>
                        <div className="plan-pricing-details">
                            <span className="price-label">Implementação única:</span>
                            <span className="price-value">R$ 4.000,00</span>
                            <span className="price-label">Mensalidade:</span>
                            <span className="price-value">R$ 899,00</span>
                        </div>
                        <button className="button" onClick={() => handlePlanClick('Plano Profissional')}>Contratar</button>
                    </div>
                    <div className="pricing-card">
                        <span className="plan-name">Plano Enterprise</span>
                        <p className="plan-description">O nível máximo de automação e personalização. Pensado para empresas que lidam com grande volume de clientes e precisam de controle total, performance e personalização.</p>
                        <hr className="line"/>
                        <ul className="card__list">
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Fine Tuning avançado para IA da sua empresa</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Até 4 números de WhatsApp. Envie e responda ilimitado</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Banco de dados local integrado</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">30 logins de usuários</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Disparo de até 2.500 mensagens mensais incluídos</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Relatórios avançados, com gráficos, estatísticas e downloads</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Admin profissional 100% personalizável</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Envio de áudios com voz totalmente treinada (até 30 palavras)</span></li>
                            <li className="card__list_item"><span className="check"><CheckIcon/></span><span className="list_text">Integração com CRM sob consulta</span></li>
                        </ul>
                        <div className="plan-pricing-details">
                            <span className="price-label">Implementação única:</span>
                            <span className="price-value">R$ 4.500,00</span>
                            <span className="price-label">Mensalidade:</span>
                            <span className="price-value">R$ 2.199,00 - R$ 3.458,00</span>
                        </div>
                        <button className="button" onClick={() => handlePlanClick('Plano Enterprise')}>Contratar</button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AiAgentSection;