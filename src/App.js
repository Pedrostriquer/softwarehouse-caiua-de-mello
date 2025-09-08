import React, { useState } from 'react'; // 1. Importar o useState
import './App.css'; 

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FinancialWhiteLabelSection from './components/FeatureSection/FeatureSection';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects';
import AiAgentSection from './components/AiAgentSection/AiAgentSection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import PricingSimulator from './components/PricingSimulator/PricingSimulator';

function App() {
  // 2. Criar o estado para a mensagem pré-preenchida
  const [prefilledMessage, setPrefilledMessage] = useState('');

  return (
    <div className="App">
      <BackgroundEffects />
      <Header />
      <main>
        <HeroSection />
        
        {/* 3. Passar a função para definir a mensagem como uma prop */}
        <AiAgentSection onPlanSelect={setPrefilledMessage} />
        
        <PricingSimulator />
        <FinancialWhiteLabelSection />
        <FAQSection /> 
        
        {/* 4. Passar a mensagem e uma função para limpá-la para o Footer */}
        <Footer 
          prefilledMessage={prefilledMessage} 
          clearPrefilledMessage={() => setPrefilledMessage('')} 
        />
      </main>
    </div>
  );
}

export default App;