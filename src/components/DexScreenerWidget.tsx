import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPairData } from '../services/dexscreener';
import { toast } from "@/hooks/use-toast";

const DexScreenerWidget = () => {
  const [pairAddress, setPairAddress] = useState('');

  const { data: pairData, isLoading, error } = useQuery({
    queryKey: ['pairData', pairAddress],
    queryFn: () => fetchPairData(pairAddress),
    enabled: !!pairAddress,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pairAddress) {
      toast({
        title: "Error",
        description: "Please enter a pair address",
        variant: "destructive",
      });
      return;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1e9) {
      return `$${(num / 1e9).toFixed(2)}B`;
    } else if (num >= 1e6) {
      return `$${(num / 1e6).toFixed(2)}M`;
    } else if (num >= 1e3) {
      return `$${(num / 1e3).toFixed(2)}K`;
    }
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="p-4 bg-black/40 border border-matrix-primary/30 rounded-lg shadow-lg backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={pairAddress}
            onChange={(e) => setPairAddress(e.target.value)}
            placeholder="Enter pair address..."
            className="flex-1 bg-black/50 border border-matrix-primary/30 text-matrix-text p-3 rounded-lg focus:outline-none focus:border-matrix-primary transition-colors font-mono placeholder:text-matrix-text/50"
          />
          <button
            type="submit"
            className="bg-matrix-primary/20 hover:bg-matrix-primary/30 text-matrix-primary px-6 py-2 rounded-lg transition-colors font-mono"
          >
            Check Token
          </button>
        </form>
      </div>

      {isLoading && (
        <div className="text-matrix-primary text-center mt-4">Loading...</div>
      )}

      {error && (
        <div className="text-red-500 text-center mt-4">Error fetching data</div>
      )}

      {pairData && (
        <div className="space-y-4 font-mono text-matrix-text mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-matrix-dark/50 p-4 rounded-lg">
              <h3 className="text-matrix-primary mb-2">Token Info</h3>
              <p>Name: {pairData.baseToken.name}</p>
              <p>Symbol: {pairData.baseToken.symbol}/{pairData.quoteToken.symbol}</p>
              <p>Address: {pairData.baseToken.address}</p>
            </div>
            <div className="bg-matrix-dark/50 p-4 rounded-lg">
              <h3 className="text-matrix-primary mb-2">Market Data</h3>
              <p>Price USD: ${parseFloat(pairData.priceUsd).toFixed(6)}</p>
              <p>24h Change: {pairData.priceChange.h24.toFixed(2)}%</p>
            </div>
            <div className="bg-matrix-dark/50 p-4 rounded-lg">
              <h3 className="text-matrix-primary mb-2">Market Cap & Volume</h3>
              <p>Market Cap: {formatNumber(pairData.marketCap || 0)}</p>
              <p>FDV: {formatNumber(pairData.fdv || 0)}</p>
              <p>24h Volume: {formatNumber(pairData.volume.h24)}</p>
            </div>
            <div className="bg-matrix-dark/50 p-4 rounded-lg">
              <h3 className="text-matrix-primary mb-2">Transactions (24h)</h3>
              <p>Buys: {pairData.txns.h24.buys}</p>
              <p>Sells: {pairData.txns.h24.sells}</p>
            </div>
          </div>
          <a
            href={pairData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-matrix-primary hover:text-matrix-primary/80 transition-colors"
          >
            View on DexScreener →
          </a>
        </div>
      )}
    </div>
  );
};

export default DexScreenerWidget;