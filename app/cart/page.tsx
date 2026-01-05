"use client";

import Cart from "@/components/Cart";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Flipkart Style */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="bg-[#2874f0] text-white">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 min-w-[120px]">
                <span className="text-2xl font-bold text-white">🌱 FreshMart</span>
              </Link>

              {/* Back Button */}
              <div className="flex-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
                >
                  <span>←</span>
                  <span className="text-sm">Back to Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="bg-white rounded-sm shadow-sm p-4 md:p-6">
          <Cart />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 FreshMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

