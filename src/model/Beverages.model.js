import mongoose from 'mongoose';

const beveragesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: [
    {
      size: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
  img: { type: String, required: true },
});

const Beverages = mongoose.models.Beverages || mongoose.model('Beverages', beveragesSchema);

export default Beverages;