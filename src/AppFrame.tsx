// src/AppFrame.tsx

import React from 'react';
import { useHeader } from '@/shared/contexts/HeaderContext';
import Header from '@/shared/components/header/Header';
import { useScrollToTop } from '@/shared/hooks/useScrollOnTop';

export default function AppFrame({ children }: React.PropsWithChildren) {
  const { config } = useHeader();
  useScrollToTop('auto');

  return (
    <div className="main-with-header">
      <Header config={config} />
      {children}
    </div>
  );
}
