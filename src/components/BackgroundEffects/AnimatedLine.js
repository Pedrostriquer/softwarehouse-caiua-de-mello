import React from 'react';
import './BackgroundEffects.css'; // Usaremos o mesmo CSS do BackgroundEffects

const AnimatedLine = ({ left, duration, delay }) => {
  // Estilos dinâmicos para posicionar cada linha e controlar sua animação
  const style = {
    left: left,
    animationDuration: duration,
    animationDelay: delay,
  };

  return (
    // O container principal da linha, que esconde o overflow
    <div className="animated-line-container" style={style}>
      {/* A linha de luz em si, com o gradiente */}
      <div className="animated-line-glow"></div>
      
      {/* Um overlay sutil para suavizar o aparecimento e desaparecimento */}
      <div className="animated-line-overlay"></div>
    </div>
  );
};

export default AnimatedLine;