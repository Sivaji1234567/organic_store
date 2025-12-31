"use client";

import Image from "next/image";
import { Vegetable } from "@/data/vegetables";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface VegetableCardProps {
  vegetable: Vegetable;
}

export default function VegetableCard({ vegetable }: VegetableCardProps) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-1 group">
      <div className="relative w-full h-56 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-200 border-t-green-600"></div>
          </div>
        )}
        {!imageError ? (
          <Image
            src={vegetable.image}
            alt={vegetable.name}
            fill
            className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
            <span className="text-6xl">🥬</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
          <span className="text-xs font-semibold text-green-700">Fresh</span>
        </div>
      </div>
      <div className="p-6 text-center flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
          {vegetable.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 min-h-[2.5rem]">{vegetable.description}</p>
        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            ₹{vegetable.price}
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{vegetable.unit}</span>
        </div>
        <button
          onClick={() => addToCart(vegetable)}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

