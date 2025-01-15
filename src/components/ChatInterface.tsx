import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Welcome to the Matrix. How can I assist you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm processing your request through the Matrix...", 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Left side terminal texts */}
      <div className="absolute -left-44 top-1/4 -translate-y-1/2 transform rotate-[60deg] space-y-8">
        <div className="text-matrix-primary/60 font-mono text-sm animate-pulse">
          BACKDOOR_ACCESS::TERMINAL_01
        </div>
        <div className="text-matrix-primary/60 font-mono text-sm">
          NEURAL_INTERFACE::ACTIVE
        </div>
      </div>

      <div className="absolute -left-52 top-3/4 -translate-y-1/2 transform rotate-[60deg] space-y-8">
        <div className="text-matrix-primary/60 font-mono text-sm animate-glow">
          SECURITY_BYPASS::INITIATED
        </div>
        <div className="text-matrix-primary/60 font-mono text-sm">
          ENCRYPTION::ENABLED
        </div>
      </div>

      {/* Right side terminal texts */}
      <div className="absolute -right-44 top-1/4 -translate-y-1/2 transform -rotate-[60deg] space-y-8">
        <div className="text-matrix-primary/60 font-mono text-sm animate-pulse">
          MATRIX_TERMINAL::CONNECTED
        </div>
        <div className="text-matrix-primary/60 font-mono text-sm">
          SYSTEM::OPERATIONAL
        </div>
      </div>

      <div className="absolute -right-52 top-3/4 -translate-y-1/2 transform -rotate-[60deg] space-y-8">
        <div className="text-matrix-primary/60 font-mono text-sm animate-glow">
          QUANTUM_LINK::ESTABLISHED
        </div>
        <div className="text-matrix-primary/60 font-mono text-sm">
          PROTOCOL::ACTIVE
        </div>
      </div>

      {/* Top terminal text */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform space-x-8 flex">
        <div className="text-matrix-primary/60 font-mono text-sm animate-pulse">
          STATUS::ONLINE
        </div>
        <div className="text-matrix-primary/60 font-mono text-sm">
          UPTIME::99.9%
        </div>
      </div>

      {/* Main chat interface */}
      <div className="w-full p-4 bg-matrix-dark/80 backdrop-blur-lg rounded-lg border border-matrix-primary/30 shadow-lg animate-fade-in">
        <div className="h-[500px] overflow-y-auto mb-4 p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-matrix-purple text-matrix-text'
                    : 'bg-matrix-primary/10 text-matrix-primary'
                } animate-fade-in`}
              >
                <p className="font-mono">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-matrix-dark border border-matrix-primary/30 text-matrix-text p-2 rounded-lg focus:outline-none focus:border-matrix-primary transition-colors font-mono"
            placeholder="Enter your message..."
          />
          <button
            type="submit"
            className="bg-matrix-primary/20 hover:bg-matrix-primary/30 text-matrix-primary p-2 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;