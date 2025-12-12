"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
        <p className="text-gray-600 text-center py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Cart ({getTotalItems()} items)
        </h2>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 text-sm font-semibold"
        >
          Clear Cart
        </button>
      </div>
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price} / {item.unit}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded"
              >
                -
              </button>
              <span className="font-semibold text-gray-800 w-8 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded"
              >
                +
              </button>
              <span className="font-semibold text-gray-800 w-20 text-right">
                ₹{item.price * item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-700 ml-2"
                title="Remove"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-gray-800">Total:</span>
          <span className="text-2xl font-bold text-green-600">
            ₹{getTotalPrice()}
          </span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
}

