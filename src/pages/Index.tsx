import React from 'react';
import MatrixRain from '../components/MatrixRain';
import ChatInterface from '../components/ChatInterface';
import Navbar from '../components/Navbar';
import DexScreenerWidget from '../components/DexScreenerWidget';
import { X, Telegram } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-dark text-matrix-text font-terminal relative">
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
      
      {/* Footer */}
      <footer className="relative z-10 py-8 mt-16 border-t border-matrix-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix-text hover:text-matrix-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <X size={24} />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix-text hover:text-matrix-primary transition-colors"
              aria-label="Telegram"
            >
              <Telegram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;