import React, { useState } from 'react';
import './App.css';
import './i18n';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import MuralsPage from './pages/MuralsPage';
import NaturalBeautyPage from './pages/NaturalBeautyPage';
import StayUpdatedPage from './pages/StayUpdatedPage';

type Page = 'home' | 'history' | 'murals' | 'natural' | 'stay-updated';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'history':
        return <HistoryPage />;
      case 'murals':
        return <MuralsPage />;
      case 'natural':
        return <NaturalBeautyPage />;
      case 'stay-updated':
        return <StayUpdatedPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
