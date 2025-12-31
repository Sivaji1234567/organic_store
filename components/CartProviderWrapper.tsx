"use client";

import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";

export default function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <CartProvider>{children}</CartProvider>
    </ToastProvider>
  );
}

