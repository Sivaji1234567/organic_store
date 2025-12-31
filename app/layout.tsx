import type { Metadata } from "next";
import "./globals.css";
import CartProviderWrapper from "@/components/CartProviderWrapper";

export const metadata: Metadata = {
  title: "Organic Vegetable Store",
  description: "Fresh organic vegetables at your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProviderWrapper>
          {children}
        </CartProviderWrapper>
      </body>
    </html>
  );
}

