"use client";

import Cart from "@/components/Cart";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl sticky top-0 z-30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link 
                  href="/"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 border border-white/30"
                  aria-label="Back to home"
                >
                  <span className="text-xl">←</span>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
                    <span className="text-4xl">🛒</span>
                    <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                      Shopping Cart
                    </span>
                  </h1>
                  <p className="text-green-50 text-sm font-medium">Review your items</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <Cart />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-16 py-8 border-t border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 mb-2">
              © 2024 Organic Vegetable Store. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ for fresh, healthy living
            </p>
          </div>
        </footer>
      </div>
  );
}

