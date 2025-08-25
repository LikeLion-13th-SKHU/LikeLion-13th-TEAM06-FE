import '@/shared/styles/fonts.scss';
import '@/shared/styles/global.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { HeaderProvider } from './shared/contexts/HeaderContext';
import { ToastProvider } from './shared/contexts/ToastContext';
import { queryClient } from '@/shared/query/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HeaderProvider>
          <ToastProvider>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </ToastProvider>
        </HeaderProvider>
      </QueryClientProvider> 
    </BrowserRouter>
  //</StrictMode>
);


