// esms-frontend/src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import SponsorSection from './components/Sponsors/SponsorSection';
import AgendaTimeline from './components/Agenda/AgendaTimeline';
import FAQList from './components/FAQList/Faq'; 
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <main>
        
        {/* 1. Hero Section */}
        <HeroSection />
        
        {/* 2. Sponsor Section */}
        <SponsorSection />
        <div className="mt-20"></div>
        {/* 3. Agenda Timeline */}
        <AgendaTimeline />
        <div className="mt-20"></div>
        {/* 4. FAQ Section */}
          <FAQList />
        <div className="mt-20"></div>

      </main>
      
      <Footer />
    </div>
  );
}

export default App;