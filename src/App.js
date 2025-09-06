import React from 'react';
import './App.css'; 

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FinancialWhiteLabelSection from './components/FeatureSection/FeatureSection'; // <-- IMPORTE AQUI
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects';
import AiAgentSection from './components/AiAgentSection/AiAgentSection'; // <-- IMPORTE
import FAQSection from './components/FAQSection/FAQSection'; // <-- IMPORTE AQUI
import Footer from './components/Footer/Footer'; // <-- IMPORTE AQUI


  

function App() {
  return (
    <div className="App">
      <BackgroundEffects />
      <Header />
      <main>
        <HeroSection />
        <FinancialWhiteLabelSection /> {/* <-- ADICIONE AQUI */}
        <AiAgentSection /> {/* <-- ADICIONE AQUI */}
        <FAQSection /> 
        <Footer /> {/* <-- ADICIONE AQUI */}
        {/* Próximos componentes virão aqui */}
      </main>
    </div>
  );
}

export default App;