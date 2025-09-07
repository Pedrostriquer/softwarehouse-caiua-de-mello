import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PricingSimulator.css';

const PricingSimulator = () => {
  // O estado 'shots' agora controla tanto o input de texto quanto o slider
  const [shots, setShots] = useState('1000'); // Começa com um valor padrão
  const pricePerShot = 0.68;

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    // Garante que o valor não ultrapasse o máximo do slider
    if (Number(value) > 10000) {
      value = '10000';
    }
    setShots(value);
  };

  const calculatePrice = () => {
    if (!shots || parseInt(shots) <= 0) {
      return 'R$ 0,00';
    }
    const totalCost = parseInt(shots) * pricePerShot;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalCost);
  };

  return (
    <motion.section 
      className="simulator-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="simulator-card"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
      >
        <h2 className="simulator-title">Simule seus Custos</h2>
        <p className="simulator-description">
          Arraste a barra ou digite o valor para ver o custo para alcançar seus clientes a R$ 0,68 por disparo.
        </p>

        <div className="simulator-input-area">
          <div className="input-header">
            <label htmlFor="shots-input" className="simulator-label">Número de Disparos</label>
            <input
              type="text"
              id="shots-input"
              className="simulator-input"
              value={shots}
              onChange={handleInputChange}
              inputMode="numeric"
            />
          </div>
          
          {/* --- NOVO SLIDER (BARRA DE ROLAGEM) --- */}
          <input
            type="range"
            className="simulator-slider"
            min="0"
            max="10000" // Define um limite máximo para o slider
            step="50" // Define o incremento ao arrastar
            value={shots}
            onChange={handleInputChange}
          />

        </div>

        <div className="simulator-result">
          <span className="simulator-label">Custo Estimado</span>
          <p className="price-display">{calculatePrice()}</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default PricingSimulator;