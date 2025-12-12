"use client";

import Image from "next/image";
import { Vegetable } from "@/data/vegetables";
import { useCart } from "@/context/CartContext";

interface VegetableCardProps {
  vegetable: Vegetable;
}

export default function VegetableCard({ vegetable }: VegetableCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col">
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={vegetable.image}
          alt={vegetable.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>
      <div className="p-6 text-center flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {vegetable.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{vegetable.description}</p>
        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="text-2xl font-bold text-green-600">
            ₹{vegetable.price}
          </span>
          <span className="text-sm text-gray-500">{vegetable.unit}</span>
        </div>
        <button
          onClick={() => addToCart(vegetable)}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

