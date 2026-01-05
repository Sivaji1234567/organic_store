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
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Add some fresh vegetables to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          My Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
        </h2>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-[#2874f0] hover:text-[#1e5bb8] text-sm font-medium px-3 py-1 transition-colors"
          >
            Remove All
          </button>
        )}
      </div>
      <div className="space-y-3 mb-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white border border-gray-200 rounded-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-4 flex-1 w-full sm:w-auto">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price} / {item.unit}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-4">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-sm">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-1 px-3 transition-colors min-w-[36px]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="font-medium text-gray-800 w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-1 px-3 transition-colors min-w-[36px]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900 text-lg min-w-[80px] text-right">
                  ₹{item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#2874f0] hover:text-[#1e5bb8] text-sm font-medium transition-colors"
                  title="Remove"
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="border-t border-gray-200 pt-6 mt-6 bg-gray-50 rounded-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold text-gray-800">Total Amount:</span>
            <span className="text-2xl font-bold text-gray-900">
              ₹{getTotalPrice()}
            </span>
          </div>
          <button className="w-full bg-[#fb641b] hover:bg-[#e55a15] text-white font-semibold py-3 px-4 rounded-sm transition-colors duration-200 shadow-sm hover:shadow-md">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

