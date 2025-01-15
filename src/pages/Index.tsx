import React from 'react';
import MatrixRain from '../components/MatrixRain';
import ChatInterface from '../components/ChatInterface';
import Navbar from '../components/Navbar';
import DexScreenerWidget from '../components/DexScreenerWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-dark text-matrix-text font-terminal">
      <MatrixRain />
      <Navbar />
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-matrix-primary animate-glow font-terminal">
            Neural Matrix AI
          </h1>
          <p className="text-lg md:text-xl text-matrix-text/80 max-w-2xl mx-auto font-terminal">
            Enter the digital realm where artificial intelligence meets cyberpunk reality.
          </p>
        </div>
        <div className="space-y-8">
          <DexScreenerWidget />
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default Index;