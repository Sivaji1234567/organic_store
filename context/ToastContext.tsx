"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Toast {
  id: string;
  message: string;
  itemName: string;
  itemImage: string;
}

interface ToastContextType {
  showToast: (message: string, itemName: string, itemImage: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, itemName: string, itemImage: string) => {
      const id = Math.random().toString(36).substring(7);
      setToasts((prev) => [...prev, { id, message, itemName, itemImage }]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: Toast[];
  onRemove: (id: string) => void;
}) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-2 sm:right-4 z-50 space-y-3 max-w-md pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast
            message={toast.message}
            itemName={toast.itemName}
            itemImage={toast.itemImage}
            onClose={() => onRemove(toast.id)}
          />
        </div>
      ))}
    </div>
  );
}

function Toast({
  message,
  itemName,
  itemImage,
  onClose,
}: {
  message: string;
  itemName: string;
  itemImage: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-green-100 overflow-hidden min-w-[280px] sm:min-w-[320px] max-w-md transform transition-all duration-300 animate-slideInRight hover:scale-105 backdrop-blur-sm">
      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex-shrink-0 border-2 border-green-200 shadow-sm">
          <Image
            src={itemImage}
            alt={itemName}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-600 text-lg sm:text-xl font-bold flex-shrink-0">✓</span>
            <p className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{message}</p>
          </div>
          <p className="text-xs text-gray-600 font-medium truncate">{itemName}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 flex-shrink-0"
          aria-label="Close notification"
        >
          <span className="text-lg">×</span>
        </button>
      </div>
      <div className="h-1 bg-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green-500 to-emerald-500 animate-shrink" />
      </div>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

