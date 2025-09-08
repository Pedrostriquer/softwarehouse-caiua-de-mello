import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ prefilledMessage, clearPrefilledMessage }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (prefilledMessage) {
            setIsTyping(true);
            let currentMessage = '';
            let index = 0;
            let timeoutId;

            const type = () => {
                if (index < prefilledMessage.length) {
                    currentMessage += prefilledMessage[index];
                    setMessage(currentMessage);
                    index++;
                    timeoutId = setTimeout(type, 50);
                } else {
                    setIsTyping(false);
                    if (nameInputRef.current) {
                        nameInputRef.current.focus();
                    }
                    if (clearPrefilledMessage) {
                        clearPrefilledMessage();
                    }
                }
            };

            setMessage('');
            type();

            return () => clearTimeout(timeoutId);
        }
    }, [prefilledMessage, clearPrefilledMessage]);

    // FUNÇÃO ATUALIZADA PARA CRIAR A MENSAGEM INTELIGENTE
    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = '5517992562727';
        let finalMessage;

        // Remove espaços em branco no início/fim e verifica como a mensagem começa
        const cleanedMessage = message.trim();
        const greeting = "Olá,";

        // Verifica se a mensagem começa com "Olá," (ignorando maiúsculas/minúsculas)
        if (cleanedMessage.toLowerCase().startsWith(greeting.toLowerCase())) {
            
            // É uma mensagem pré-preenchida. Vamos criar la frase única e natural.
            // Pega o resto da mensagem, removendo o "Olá, " inicial.
            const interestPart = cleanedMessage.substring(greeting.length).trim();
            
            // Constrói a mensagem final fluida.
            finalMessage = `Olá! Meu nome é ${name} e ${interestPart}`;

        } else {
            
            // É uma mensagem personalizada pelo usuário. Usamos o formato com quebra de linha.
            finalMessage = `Olá, meu nome é ${name}.\n\nMensagem: ${message}`;
        }

        const fullMessage = encodeURIComponent(finalMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
    };

    return (
        <footer className="footer-section" id="contact"> 
            <div className="footer-content">
                <motion.form 
                    className="whatsapp-form" 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <input 
                        ref={nameInputRef}
                        type="text" 
                        placeholder="Seu nome" 
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <textarea 
                        placeholder="Sua mensagem..." 
                        className="form-input message-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="3"
                        readOnly={isTyping}
                    ></textarea>
                    <button type="submit" className="form-button">
                        <FaWhatsapp size={20} />
                        Enviar via WhatsApp
                    </button>
                </motion.form>

                <motion.div 
                    className="footer-info"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="contact-details">
                        <h4>Fale Conosco</h4>
                        <a href="mailto:caiua@softwarehousecaiuademello.com.br" className="email-link">
                            caiua@softwarehousecaiuademello.com.br
                        </a>
                    </div>
                    <div className="social-links">
                        <motion.a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }}>
                            <FaLinkedin />
                        </motion.a>
                        <motion.a href="https://www.instagram.com/demellosoftwarehouse/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }}>
                            <FaInstagram />
                        </motion.a>
                        <motion.a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }}>
                            <FaFacebook />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            
            <p className="copyright-text">
                &copy; {new Date().getFullYear()} Software House Caiuã De Mello. Todos os direitos reservados.
            </p>
        </footer>
    );
};

export default Footer;