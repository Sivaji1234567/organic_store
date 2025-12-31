"use client";

import { vegetables } from "@/data/vegetables";
import VegetableCard from "@/components/VegetableCard";
import CartIcon from "@/components/CartIcon";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVegetables = vegetables.filter((veg) =>
    veg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for vegetables..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 pr-4 rounded-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>

              {/* Cart */}
              <div className="flex items-center gap-4">
                <CartIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 py-3">
              <button className="text-gray-700 hover:text-[#2874f0] font-medium text-sm">
                All Categories
              </button>
              <button className="text-gray-700 hover:text-[#2874f0] font-medium text-sm">
                Offers
              </button>
              <button className="text-gray-700 hover:text-[#2874f0] font-medium text-sm">
                Best Sellers
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Deals Banner */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-red-600 font-semibold">🔥</span>
            <span>Special Offer: Get 10% off on orders above ₹500!</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Fresh Vegetables"}
          </h2>
          <p className="text-sm text-gray-600">
            {filteredVegetables.length} {filteredVegetables.length === 1 ? 'item' : 'items'} found
          </p>
        </div>

        {/* Product Grid - Flipkart Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredVegetables.map((vegetable) => (
            <VegetableCard key={vegetable.id} vegetable={vegetable} />
          ))}
        </div>

        {filteredVegetables.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No vegetables found matching your search.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Payments</li>
                <li>Shipping</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Policy</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Return Policy</li>
                <li>Terms of Use</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Social</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>© 2024 FreshMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

