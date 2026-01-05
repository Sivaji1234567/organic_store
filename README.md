# 🌱 FreshMart - Organic Vegetable Store

A modern Next.js e-commerce application for an organic vegetable store with PostgreSQL database integration. Built with Flipkart-inspired design.

## Features

- 🥬 Browse vegetables from PostgreSQL database
- 🔍 Real-time search functionality
- 🛒 Shopping cart with quantity management
- 💰 Prices in Indian Rupees (₹)
- 📱 Fully responsive design
- 🎨 Flipkart-inspired modern UI
- 🗄️ PostgreSQL database integration
- 🔔 Beautiful toast notifications

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

## Installation

1. **Clone the repository and install dependencies:**
```bash
npm install
```

2. **Set up PostgreSQL database:**
   - Create a new PostgreSQL database
   - Update the `.env` file with your database connection string:
   ```env
   DATABASE_URL=postgresql://username:password@host:port/database
   ```

3. **Initialize the database:**
```bash
npm run init-db
```

This will create the `vegetables` table and insert sample data.

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Database Setup

### Manual Setup

If you prefer to set up the database manually:

1. Connect to your PostgreSQL database
2. Run the SQL script from `lib/schema.sql`

### Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/vegetable_store
NODE_ENV=development
```

## API Endpoints

- `GET /api/vegetables` - Get all vegetables (supports `?search=query` parameter)
- `GET /api/vegetables/[id]` - Get a specific vegetable
- `POST /api/vegetables` - Create a new vegetable
- `PUT /api/vegetables/[id]` - Update a vegetable
- `DELETE /api/vegetables/[id]` - Delete a vegetable

## Project Structure

```
├── app/
│   ├── api/
│   │   └── vegetables/      # API routes for vegetables
│   ├── cart/
│   │   └── page.tsx        # Cart page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── VegetableCard.tsx    # Product card component
│   ├── Cart.tsx             # Cart component
│   └── CartIcon.tsx        # Cart icon
├── context/
│   ├── CartContext.tsx      # Cart state management
│   └── ToastContext.tsx    # Toast notifications
├── lib/
│   ├── db.ts               # Database connection
│   └── schema.sql          # Database schema
└── scripts/
    └── init-db.ts          # Database initialization script
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **Tailwind CSS** - Styling
- **React Context API** - State management

## Database Schema

The `vegetables` table has the following structure:

- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(255) UNIQUE)
- `price` (DECIMAL(10, 2))
- `image` (TEXT)
- `description` (TEXT)
- `unit` (VARCHAR(50))
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Initialize database
npm run init-db
```

## License

MIT
