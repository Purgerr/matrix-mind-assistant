import { toast } from "@/hooks/use-toast";

export interface DexScreenerPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    symbol: string;
  };
  priceNative: string;
  priceUsd: string;
  txns: {
    h24: {
      buys: number;
      sells: number;
    };
  };
  volume: {
    h24: number;
  };
  priceChange: {
    h24: number;
  };
  fdv: number; // Fully Diluted Valuation
  marketCap: number;
}

export const fetchPairData = async (pairAddress: string): Promise<DexScreenerPair | null> => {
  try {
    console.log('Fetching pair data for:', pairAddress);
    const response = await fetch(`https://api.dexscreener.com/latest/dex/pairs/${pairAddress}`);
    const data = await response.json();
    
    if (data.pairs && data.pairs[0]) {
      console.log('Pair data received:', data.pairs[0]);
      return data.pairs[0];
    }
    
    toast({
      title: "Error",
      description: "Pair not found",
      variant: "destructive",
    });
    return null;
  } catch (error) {
    console.error('Error fetching pair data:', error);
    toast({
      title: "Error",
      description: "Failed to fetch pair data",
      variant: "destructive",
    });
    return null;
  }
};