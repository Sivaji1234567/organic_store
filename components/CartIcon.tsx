"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartIcon() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 border border-white/30 inline-block"
      aria-label="Shopping cart"
    >
      <span className="text-2xl">🛒</span>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-md">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

