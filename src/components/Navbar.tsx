import React, { useState } from 'react';
import { Wallet, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWalletConnect = async () => {
    try {
      // Simulated wallet connection
      setIsWalletConnected(true);
      toast({
        title: "Wallet Connected",
        description: "Your wallet has been successfully connected.",
      });
    } catch (error) {
      console.error('Wallet connection error:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-matrix-dark/80 backdrop-blur-lg border-b border-matrix-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-matrix-primary text-xl font-bold">Neural Matrix</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-matrix-primary text-matrix-primary hover:bg-matrix-primary/20"
              onClick={handleWalletConnect}
            >
              <Wallet className="mr-2 h-4 w-4" />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-matrix-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Button
              variant="outline"
              className="w-full border-matrix-primary text-matrix-primary hover:bg-matrix-primary/20"
              onClick={handleWalletConnect}
            >
              <Wallet className="mr-2 h-4 w-4" />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;