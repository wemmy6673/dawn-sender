'use client';

import config from './rainbowKitConfig';
import { WagmiProvider } from 'wagmi';
import{QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { useState } from 'react';
import { mainnet, sepolia } from 'wagmi/chains';
import { RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

export default function providers(props:{ children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        {/* <ConnectButton /> */}
        {props.children}

      </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
