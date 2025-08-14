import '@/shared/styles/fonts.scss';
import '@/shared/styles/global.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { HeaderProvider } from './shared/contexts/HeaderContext';
import { ToastProvider } from './shared/contexts/ToastContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </HeaderProvider>
  </StrictMode>
);
