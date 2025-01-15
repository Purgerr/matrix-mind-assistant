import React from 'react';
import MatrixRain from '../components/MatrixRain';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-dark text-matrix-text">
      <MatrixRain />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-matrix-primary animate-glow">
            Neural Matrix AI
          </h1>
          <p className="text-lg md:text-xl text-matrix-text/80 max-w-2xl mx-auto">
            Enter the digital realm where artificial intelligence meets cyberpunk reality.
          </p>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;