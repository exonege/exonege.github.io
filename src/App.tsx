import { useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import type { PortfolioCategory } from './types';

export default function App() {
  const [activePort, setActivePort] = useState<PortfolioCategory>('personal');

  return (
    <>
      <Header />
      <AboutSection active={activePort} onChange={setActivePort} />
      <Footer />
    </>
  );
}
