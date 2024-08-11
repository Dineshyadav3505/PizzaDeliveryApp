import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: [
    {
      size: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
  crust: [
    {
      name: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
  img: { type: String, required: true },
});

const Pizza = mongoose.models.Pizza || mongoose.model('Pizza', pizzaSchema);

export default Pizza;