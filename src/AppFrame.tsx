// src/AppFrame.tsx

import React from 'react';
import { useHeader } from '@/shared/contexts/HeaderContext';
import Header from '@/shared/components/header/Header';

export default function AppFrame({ children }: React.PropsWithChildren) {
  const { config } = useHeader();
  return (
    <div className="main-with-header">
      <Header config={config} />
      {children}
    </div>
  );
}
