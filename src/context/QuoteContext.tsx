'use client';
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export interface QuoteItem { key: string; sku: string; title: string; shade: string; thaans: number }
interface Ctx {
  items: QuoteItem[]; open: boolean; setOpen: (v: boolean) => void;
  add: (i: Omit<QuoteItem, 'key'>) => void;
  setThaans: (key: string, n: number) => void;
  remove: (key: string) => void; clear: () => void;
}
const QuoteCtx = createContext<Ctx | null>(null);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<Ctx>(() => ({
    items, open, setOpen,
    add: (i) => {
      const key = `${i.sku}-${i.shade}`;
      setItems((p) => p.some((x) => x.key === key)
        ? p.map((x) => x.key === key ? { ...x, thaans: x.thaans + i.thaans } : x)
        : [...p, { ...i, key }]);
      setOpen(true);
    },
    setThaans: (key, n) => setItems((p) => p.map((x) => x.key === key ? { ...x, thaans: Math.max(1, n) } : x)),
    remove: (key) => setItems((p) => p.filter((x) => x.key !== key)),
    clear: () => setItems([]),
  }), [items, open]);

  return <QuoteCtx.Provider value={value}>{children}</QuoteCtx.Provider>;
};
export const useQuote = () => {
  const c = useContext(QuoteCtx);
  if (!c) throw new Error('useQuote must be inside QuoteProvider');
  return c;
};
