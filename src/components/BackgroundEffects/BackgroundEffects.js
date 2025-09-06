import React from 'react';
import './BackgroundEffects.css';
import AnimatedLine from './AnimatedLine'; // <-- Importe o novo componente

const BackgroundEffects = () => {
  return (
    <div className="background-effects-container">
      {/* O grid sutil que já tínhamos */}
      <div className="background-grid">
        <div className="grid-line vertical" style={{ left: '10%' }}></div>
        <div className="grid-line vertical" style={{ left: '30%' }}></div>
        <div className="grid-line vertical" style={{ left: '50%' }}></div>
        <div className="grid-line vertical" style={{ left: '70%' }}></div>
        <div className="grid-line vertical" style={{ left: '90%' }}></div>
        
        <div className="grid-line horizontal" style={{ top: '20%' }}></div>
        <div className="grid-line horizontal" style={{ top: '50%' }}></div>
        <div className="grid-line horizontal" style={{ top: '80%' }}></div>
      </div>
      
      {/* Nossas novas linhas animadas */}
      <AnimatedLine left="15%" duration="17s" delay="0s" />
      <AnimatedLine left="25%" duration="8s" delay="3s" />
      <AnimatedLine left="55%" duration="12s" delay="7s" />
      <AnimatedLine left="80%" duration="15s" delay="1s" />
    </div>
  );
};

export default BackgroundEffects;