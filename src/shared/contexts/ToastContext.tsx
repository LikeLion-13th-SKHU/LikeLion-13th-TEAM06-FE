// src/shared/contexts/ToastContext.tsx

import React, { createContext, useContext, useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import '@/shared/styles/_toast.scss';

type ToastVariant = 'default' | 'success' | 'error' | 'warning';
type Toast = {
  id: string;
  msg: string;
  variant: ToastVariant;
  duration: number;
};

type ToastContextType = {
  show: (msg: string, opts?: Partial<Pick<Toast, 'variant' | 'duration'>>) => void;
  success: (msg: string, duration?: number) => void;
  error: (msg: string, duration?: number) => void;
  warning: (msg: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback<ToastContextType['show']>(
    (msg, opts) => {
      const id = Math.random().toString(36).slice(2);
      const toast: Toast = {
        id,
        msg,
        variant: opts?.variant ?? 'default',
        duration: opts?.duration ?? 2000,
      };
      setToasts((prev) => {
        if (prev[prev.length - 1]?.msg === msg) return prev;
        return [...prev, toast].slice(-3);
      });
      window.setTimeout(() => remove(id), toast.duration);
    },
    [remove]
  );

  const api = useMemo<ToastContextType>(
    () => ({
      show,
      success: (msg, duration) => show(msg, { variant: 'success', duration }),
      error: (msg, duration) => show(msg, { variant: 'error', duration }),
      warning: (msg, duration) => show(msg, { variant: 'warning', duration }),
    }),
    [show]
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      {createPortal(<ToastContainer toasts={toasts} onClose={remove} />, document.body)}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
}

function ToastContainer({ toasts, onClose }: { toasts: Toast[]; onClose: (id: string) => void }) {
  return (
    <div className="toast-root" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.variant}`} onClick={() => onClose(t.id)}>
          {iconOf(t.variant)}
          <span className="msg">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}

function iconOf(v: ToastVariant) {
  if (v === 'success') return <span aria-hidden>✅</span>;
  if (v === 'error') return <span aria-hidden>⛔</span>;
  if (v === 'warning') return <span aria-hidden>⚠️</span>;
  return <span aria-hidden>📋</span>;
}
