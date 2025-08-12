import '@/shared/styles/fonts.scss';
import '@/shared/styles/global.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { HeaderProvider } from './shared/contexts/HeaderContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </StrictMode>
);
