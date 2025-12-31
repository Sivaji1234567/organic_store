"use client";

import Image from "next/image";
import { Vegetable } from "@/data/vegetables";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { useState } from "react";

interface VegetableCardProps {
  vegetable: Vegetable;
}

export default function VegetableCard({ vegetable }: VegetableCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleAddToCart = () => {
    addToCart(vegetable);
    showToast("Added to cart!", vegetable.name, vegetable.image);
  };

  return (
    <div className="bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 flex flex-col group cursor-pointer">
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden p-4">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-[#2874f0]"></div>
          </div>
        )}
        {!imageError ? (
          <Image
            src={vegetable.image}
            alt={vegetable.name}
            fill
            className={`object-contain transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-4xl">🥬</span>
          </div>
        )}
      </div>

      {/* Product Info - Flipkart Style */}
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 min-h-[2.5rem] group-hover:text-[#2874f0] transition-colors">
          {vegetable.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-1">{vegetable.description}</p>
        
        {/* Rating - Placeholder */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-400 text-xs">★★★★★</span>
          <span className="text-xs text-gray-500">(4.2)</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-gray-900">₹{vegetable.price}</span>
            <span className="text-xs text-gray-500">{vegetable.unit}</span>
          </div>
        </div>

        {/* Add to Cart Button - Flipkart Style */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#ff9f00] hover:bg-[#ff8c00] text-white font-medium py-2 px-3 rounded-sm text-sm transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

