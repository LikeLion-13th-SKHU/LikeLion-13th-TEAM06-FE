// src/shared/contexts/HeaderContext.tsx
import React from 'react';

export type HeaderKind =
  | 'main' // 로고 + 우측 액션들
  | 'page' // 뒤로가기 + 타이틀
  | 'none';

export type HeaderActionId = 'bookmark' | 'mypage' | 'notification' | 'more';

export type HeaderAction = {
  id: HeaderActionId;
  onClick?: () => void;
  label?: string;
};

export type HeaderConfig = {
  kind: HeaderKind;
  title?: string;
  backTo?: string;
  autoHide?: boolean;
  rightActions?: HeaderAction[];
};

const defaultConfig: HeaderConfig = { kind: 'main', autoHide: false };

export const HeaderContext = React.createContext<{
  config: HeaderConfig;
  setConfig: (c: HeaderConfig) => void;
}>({
  config: defaultConfig,
  setConfig: () => {},
});

export function HeaderProvider({ children }: React.PropsWithChildren) {
  const [config, setConfig] = React.useState<HeaderConfig>(defaultConfig);
  return <HeaderContext.Provider value={{ config, setConfig }}>{children}</HeaderContext.Provider>;
}

export const useHeader = () => React.useContext(HeaderContext);
