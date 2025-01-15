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
    <div className="w-full max-w-2xl mx-auto p-4 bg-matrix-dark/80 backdrop-blur-lg rounded-lg border border-matrix-primary/30 shadow-lg animate-fade-in">
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
  );
};

export default ChatInterface;