import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

// Componente para um único item do FAQ (Pergunta e Resposta)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <motion.div
        className="faq-question-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "hsla(240, 15%, 12%, 0.7)" }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="faq-question">{question}</h4>
        <motion.div className="faq-icon" animate={{ rotate: isOpen ? 45 : 0 }}>
          <div className="icon-line horizontal" />
          <div className="icon-line vertical" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="faq-answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// Componente Principal da Seção FAQ
const FAQSection = () => {
    
    // Dados das perguntas e respostas
    const faqData = [
        {
            question: "Como funciona a plataforma de Agente de IA?",
            answer: "Nossa plataforma se integra aos seus canais de marketing (anúncios, formulários, etc.) para capturar leads automaticamente. A IA então classifica e organiza esses leads em um dashboard intuitivo, permitindo que você inicie campanhas de disparo com apenas alguns cliques."
        },
        {
            question: "Quais integrações são suportadas para captar leads?",
            answer: "Atualmente, oferecemos integrações nativas com Meta Ads (Facebook/Instagram), Google Ads e formulários de sites. Estamos constantemente expandindo nossa lista de integrações."
        },
        {
            question: "Os disparos de mensagens são personalizáveis?",
            answer: "Sim! Você pode criar múltiplos templates de mensagens usando variáveis como nome do lead, origem da campanha e mais. Isso garante que cada disparo seja relevante e pessoal, aumentando drasticamente as taxas de conversão."
        },
        {
            question: "Qual é o custo da taxa de integração?",
            answer: "A taxa de integração é um valor único para cobrir o setup inicial da sua conta, a conexão com suas fontes de leads e um treinamento com nossa equipe para garantir que você aproveite ao máximo a plataforma desde o primeiro dia."
        }
    ];

  return (
    <section className="faq-section" id="faq">
      <motion.div 
        className="faq-text-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="faq-title">Suas Perguntas, Respondidas</h2>
        <p className="faq-subtitle">
            Encontre respostas instantâneas para as dúvidas mais comuns sobre nosso Agente de IA.
        </p>
      </motion.div>

      <motion.div 
        className="faq-list"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;