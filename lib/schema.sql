-- Create vegetables table
CREATE TABLE IF NOT EXISTS vegetables (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  price DECIMAL(10, 2) NOT NULL,
  image TEXT NOT NULL,
  description TEXT,
  unit VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on name for faster searches
CREATE INDEX IF NOT EXISTS idx_vegetables_name ON vegetables(name);

-- Insert sample data (optional - you can remove this if you want to add data manually)
INSERT INTO vegetables (name, price, image, description, unit) VALUES
  ('Tomato', 40.00, 'https://images.unsplash.com/photo-1546097491-b8c4b2793a5a?w=400&h=400&fit=crop', 'Fresh red tomatoes', 'per kg'),
  ('Potato', 30.00, 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&h=400&fit=crop', 'Organic potatoes', 'per kg'),
  ('Onion', 35.00, 'https://images.unsplash.com/photo-1618512496249-3ae5e78f7d64?w=400&h=400&fit=crop', 'Fresh onions', 'per kg'),
  ('Carrot', 50.00, 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop', 'Sweet carrots', 'per kg'),
  ('Cabbage', 25.00, 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop', 'Fresh cabbage', 'per piece'),
  ('Cauliflower', 45.00, 'https://images.unsplash.com/photo-1618164436247-4473940d1f5c?w=400&h=400&fit=crop', 'Organic cauliflower', 'per piece'),
  ('Brinjal', 40.00, 'https://images.unsplash.com/photo-1604977049385-b0b0c39c7c5e?w=400&h=400&fit=crop&q=80', 'Fresh brinjal', 'per kg'),
  ('Capsicum', 60.00, 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop&q=80', 'Colorful capsicum', 'per kg'),
  ('Cucumber', 30.00, 'https://images.unsplash.com/photo-1604977049385-b0b0c39c7c5e?w=400&h=400&fit=crop&q=80', 'Fresh cucumber', 'per kg'),
  ('Spinach', 20.00, 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', 'Fresh spinach leaves', 'per bunch'),
  ('Beetroot', 40.00, 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop&q=80', 'Organic beetroot', 'per kg'),
  ('Radish', 30.00, 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop&q=80', 'Fresh radish', 'per kg'),
  ('Lady Finger', 50.00, 'https://images.unsplash.com/photo-1604977049385-b0b0c39c7c5e?w=400&h=400&fit=crop&q=80', 'Fresh lady finger', 'per kg'),
  ('Bottle Gourd', 35.00, 'https://images.unsplash.com/photo-1604977049385-b0b0c39c7c5e?w=400&h=400&fit=crop&q=80', 'Fresh bottle gourd', 'per kg'),
  ('Bitter Gourd', 40.00, 'https://images.unsplash.com/photo-1604977049385-b0b0c39c7c5e?w=400&h=400&fit=crop&q=80', 'Organic bitter gourd', 'per kg')
ON CONFLICT (name) DO NOTHING;

