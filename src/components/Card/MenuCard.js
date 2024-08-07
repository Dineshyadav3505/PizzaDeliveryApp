'use client';
import React from 'react'
import { useState } from 'react'

const MenuCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedCrust, setSelectedCrust] = useState(product.crust[0]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    
    // Calculate total price based on selected size, crust, and quantity
    const totalPrice = ((selectedSize.price + selectedCrust.price) * selectedQuantity).toFixed(2);

    const handleAddToCart = () => {
        alert(`Added to cart:\n${selectedQuantity} x ${product.name} (${selectedSize.name} - ${selectedCrust.name}) - $${totalPrice}`);
        // Here you would typically update the cart state or context
    };

    return (
        <div className="border rounded-lg p-4 shadow-md m-2 max-w-xs">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            
            <label className="block mt-2">Choose Size:</label>
            <select 
                value={selectedSize.name} 
                onChange={(e) => {
                    const selected = product.sizes.find(size => size.name === e.target.value);
                    setSelectedSize(selected);
                }} 
                className="border rounded-md p-1 mt-1 w-full"
            >
                {product.sizes.map((sizeOption) => (
                    <option key={sizeOption.name} value={sizeOption.name}>{sizeOption.name} - ${sizeOption.price}</option>
                ))}
            </select>
            
            <label className="block mt-2">Choose Crust:</label>
            <select 
                value={selectedCrust.name} 
                onChange={(e) => {
                    const selected = product.crust.find(crust => crust.name === e.target.value);
                    setSelectedCrust(selected);
                }} 
                className="border rounded-md p-1 mt-1 w-full"
            >
                {product.crust.map((crustOption) => (
                    <option key={crustOption.name} value={crustOption.name}>{crustOption.name} - ${crustOption.price}</option>
                ))}
            </select>
            
            <label className="block mt-2">Choose Quantity:</label>
            <select 
                value={selectedQuantity} 
                onChange={(e) => setSelectedQuantity(Number(e.target.value))} 
                className="border rounded-md p-1 mt-1 w-full"
            >
                {product.quantity.map((qty) => (
                    <option key={qty} value={qty}>{qty}</option>
                ))}
            </select>
            
            <p className="font-bold text-lg mt-2">Total Price: ${totalPrice}</p>
            
            <button 
                onClick={handleAddToCart} 
                className="bg-green-500 text-white rounded-md py-2 mt-4 w-full hover:bg-green-600 transition"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default MenuCard