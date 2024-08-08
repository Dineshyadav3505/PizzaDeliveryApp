'use client';
import React, { useState } from 'react';

const SandwichCard = ({ product }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    // Calculate total price based on quantity
    const totalPrice = product.price * selectedQuantity;

    const handleAddToCart = () => {
        alert(`Added to cart:\n${selectedQuantity} x ${product.name} - ₹${totalPrice}`);
        // Here you would typically update the cart state or context
        
    };

    return (
        <div className="border w-full mx-auto my-5 md:w-60 md:h-[420px] lg:w-72 h-[425px] lg:h-[420px] border-zinc-900 dark:border-zinc-100 rounded-lg p-2 shadow-md">
            <div className='relative flex-wrap'>
               <div className="h-48 w-full rounded-md overflow-hidden">
               <img
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover rounded-md" 
                />
               </div>
                <p className="text-base mt-2 absolute top-36 left-1 text-white bg-black px-2 py-1">₹ {totalPrice}</p>
                <h3 className="text-base font-semibold py-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm h-16 overflow-hidden">{product.description}</p>            
            </div>

            <div className="mt-3 ">
                <label className="block text-[12px]">Quantity:</label>
                <select 
                    value={selectedQuantity} 
                    onChange={(e) => setSelectedQuantity(Number(e.target.value))} 
                    className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                >
                    {product.quantity.map((quantityOption) => (
                        <option key={quantityOption} value={quantityOption}>{quantityOption}</option>
                    ))}
                </select>
            </div>

            <div className="mt-4">
                <button 
                    onClick={handleAddToCart} 
                    className="bg-green-500 text-white rounded py-1 w-full hover:bg-green-600 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SandwichCard;