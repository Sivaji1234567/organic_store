# 🌱 Organic Vegetable Store

A modern Next.js application for an organic vegetable store where users can browse vegetables and add them to their cart. All prices are displayed in Indian Rupees (₹).

## Features

- 🥬 Browse a wide selection of fresh vegetables
- 🛒 Add vegetables to cart with quantity management
- 💰 View prices in Indian Rupees (₹)
- 📱 Responsive design that works on all devices
- 💾 Cart persistence using localStorage
- 🎨 Modern and clean UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Context API** - State management for cart

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page with vegetable listing
│   └── globals.css     # Global styles
├── components/
│   ├── VegetableCard.tsx  # Individual vegetable card component
│   ├── Cart.tsx          # Cart component
│   └── CartIcon.tsx      # Cart icon with badge
├── context/
│   └── CartContext.tsx   # Cart state management
└── data/
    └── vegetables.ts     # Vegetable data with prices
```

## Features in Detail

### Vegetable Listing
- Displays all available vegetables in a responsive grid
- Shows vegetable name, emoji, description, price, and unit
- Each vegetable card has an "Add to Cart" button

### Shopping Cart
- Click the cart icon in the header to view your cart
- Add/remove items
- Adjust quantities using +/- buttons
- View total price in rupees
- Cart persists across page refreshes using localStorage

## Available Vegetables

The store includes 15+ vegetables including:
- Tomato, Potato, Onion, Carrot
- Cabbage, Cauliflower, Brinjal
- Capsicum, Cucumber, Spinach
- And more!

All prices are in Indian Rupees (₹).

