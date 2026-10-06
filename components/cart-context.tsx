"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const CartContext = createContext<{ count: number; add: () => void }>({
  count: 0,
  add: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(2);
  return (
    <CartContext value={{ count, add: () => setCount((c) => c + 1) }}>{children}</CartContext>
  );
}

export function useCart() {
  return useContext(CartContext);
}
