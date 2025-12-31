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
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-700">
          {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
        </h3>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-50 transition-colors border border-red-200"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 bg-gradient-to-br from-white to-green-50/30 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-4 flex-1 w-full md:w-auto">
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex-shrink-0 border-2 border-green-100 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 mb-1 text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price} / {item.unit}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded-md shadow-sm transition-colors min-w-[40px]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="font-bold text-gray-800 w-10 text-center text-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded-md shadow-sm transition-colors min-w-[40px]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-green-600 text-xl md:text-2xl min-w-[100px] text-right">
                  ₹{item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  title="Remove"
                  aria-label="Remove item"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="border-t-2 border-gray-200 pt-6 mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold text-gray-800">Total:</span>
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ₹{getTotalPrice()}
            </span>
          </div>
          <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-100 text-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

