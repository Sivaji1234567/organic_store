"use client";

import { CartProvider } from "@/context/CartContext";
import { vegetables } from "@/data/vegetables";
import VegetableCard from "@/components/VegetableCard";
import CartIcon from "@/components/CartIcon";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-green-600 text-white shadow-lg sticky top-0 z-30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">🌱 Organic Vegetable Store</h1>
                <p className="text-green-100 text-sm mt-1">Fresh vegetables at your doorstep</p>
              </div>
              <CartIcon />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Our Fresh Vegetables
            </h2>
            <p className="text-gray-600">
              Choose from our wide selection of organic vegetables
            </p>
          </div>

          {/* Vegetable Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {vegetables.map((vegetable) => (
              <VegetableCard key={vegetable.id} vegetable={vegetable} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Organic Vegetable Store. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

