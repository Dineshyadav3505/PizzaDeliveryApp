import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Object, required: true },
    crust: { type: Object, required: true },
    img: { type: String, required: true },
});

// Use a conditional to avoid overwriting the model
const Pizza = mongoose.models.Pizza || mongoose.model('Pizza', pizzaSchema);

export default Pizza;