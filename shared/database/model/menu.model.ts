import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  food: { type: String, required: true },
  price: { type: String, required: true },
  dist: String,
  rating: Number,
  img: String, // Cloudinary URL
});

export const Menu = mongoose.models.Menu || mongoose.model('Menu', MenuSchema);