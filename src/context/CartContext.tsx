"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartLine } from "@/types/catalog";

interface CartContextValue {
  lines: CartLine[];
  addLine: (line: Omit<CartLine, "quantity">, quantity?: number) => void;
  removeLine: (productId: string, variantWeight: string) => void;
  setQuantity: (productId: string, variantWeight: string, quantity: number) => void;
  clear: () => void;
  totalItems: number;
  totalKnownAmount: number;
  hasUnknownPrices: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "aaicha-pharal-cart";

function lineKey(productId: string, variantWeight: string) {
  return `${productId}__${variantWeight}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      // Corrupt or inaccessible storage — start with an empty cart.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addLine: CartContextValue["addLine"] = (line, quantity = 1) => {
    setLines((prev) => {
      const key = lineKey(line.productId, line.variantWeight);
      const existing = prev.find((l) => lineKey(l.productId, l.variantWeight) === key);
      if (existing) {
        return prev.map((l) =>
          lineKey(l.productId, l.variantWeight) === key ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { ...line, quantity }];
    });
  };

  const removeLine: CartContextValue["removeLine"] = (productId, variantWeight) => {
    setLines((prev) => prev.filter((l) => lineKey(l.productId, l.variantWeight) !== lineKey(productId, variantWeight)));
  };

  const setQuantity: CartContextValue["setQuantity"] = (productId, variantWeight, quantity) => {
    if (quantity <= 0) return removeLine(productId, variantWeight);
    setLines((prev) =>
      prev.map((l) => (lineKey(l.productId, l.variantWeight) === lineKey(productId, variantWeight) ? { ...l, quantity } : l))
    );
  };

  const clear = () => setLines([]);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = lines.reduce((sum, l) => sum + l.quantity, 0);
    const hasUnknownPrices = lines.some((l) => l.unitPrice == null);
    const totalKnownAmount = lines.reduce((sum, l) => sum + (l.unitPrice ?? 0) * l.quantity, 0);
    return { lines, addLine, removeLine, setQuantity, clear, totalItems, totalKnownAmount, hasUnknownPrices };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
