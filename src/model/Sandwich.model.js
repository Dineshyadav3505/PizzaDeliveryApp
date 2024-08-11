import mongoose from 'mongoose';

const sandwichSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true},
  img: { type: String, required: true },
});

const Sandwich = mongoose.models.Sandwich || mongoose.model('Sandwich', sandwichSchema);

export default Sandwich;