import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

// Importando ícones da biblioteca React Icons
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = '5573999916668';
        const fullMessage = encodeURIComponent(`Olá, meu nome é ${name}.\n\nMensagem: ${message}`);
        window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
    };

    return (
        <footer className="footer-section" id="contact"> 
            <div className="footer-content">
                {/* Lado Esquerdo: Formulário de Contato */}
                <motion.form 
                    className="whatsapp-form" 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <input 
                        type="text" 
                        placeholder="Seu nome" 
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    {/* O campo de mensagem agora é uma textarea para mais espaço */}
                    <textarea 
                        placeholder="Sua mensagem..." 
                        className="form-input message-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="3"
                    ></textarea>
                    <button type="submit" className="form-button">
                        <FaWhatsapp size={20} />
                        Enviar via WhatsApp
                    </button>
                </motion.form>

                {/* Lado Direito: Informações e Redes Sociais */}
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
                        <motion.a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }}>
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