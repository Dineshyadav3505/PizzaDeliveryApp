import mongoose from 'mongoose';

const burgerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true},
  img: { type: String, required: true },
});

const Burger = mongoose.models.Burger || mongoose.model('Burger', burgerSchema);

export default Burger;