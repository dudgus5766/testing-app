import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export function createReactQueryWrapper() {
  const queryClient = new QueryClient({
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({children}: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
