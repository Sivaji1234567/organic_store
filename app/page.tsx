"use client";

import { vegetables } from "@/data/vegetables";
import VegetableCard from "@/components/VegetableCard";
import CartIcon from "@/components/CartIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl sticky top-0 z-30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-5">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold mb-1 flex items-center gap-2">
                  <span className="text-5xl">🌱</span>
                  <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                    Organic Vegetable Store
                  </span>
                </h1>
                <p className="text-green-50 text-sm font-medium">Fresh vegetables at your doorstep</p>
              </div>
              <CartIcon />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 py-12 border-b border-green-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Farm Fresh, Always Fresh
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of organic vegetables, handpicked for quality and freshness
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our Fresh Vegetables
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
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
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-16 py-8 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                © 2024 Organic Vegetable Store. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Made with ❤️ for fresh, healthy living
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

