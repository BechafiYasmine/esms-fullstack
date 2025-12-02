// esms-frontend/src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import SponsorSection from './components/Sponsors/SponsorSection';
import AgendaTimeline from './components/Agenda/AgendaTimeline';
import FAQList from './components/FAQList/FAQList'; 
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
        
        {/* 3. Agenda Timeline */}
        <AgendaTimeline />
        
        {/* 4. FAQ Section */}
        <section 
          id="faq" 
          style={{ 
            padding: 'var(--spacing-lg) 0 100px', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}
        >
          <h2 style={{ color: 'var(--color-text-primary)', textAlign: 'center', fontSize: '3rem' }}>FAQ :</h2>
          <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>//Questions</p>
          <FAQList />
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

export default App;