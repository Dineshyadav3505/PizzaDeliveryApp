'use client';
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

const PizzaCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedCrust, setSelectedCrust] = useState(product.crust[0]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    
    // Calculate total price based on selected size, crust, and quantity
    const totalPrice = ((selectedSize.price + selectedCrust.price) * selectedQuantity)+"/-";

    const handleAddToCart = () => {
        alert(`Added to cart:\n${selectedQuantity} x ${product.name} (${selectedSize.name} - ${selectedCrust.name}) - $${totalPrice}`);
        // Here you would typically update the cart state or context
    };

    return (
        <div className=" border-[1px] mx-auto my-5 w-full md:w-60 md:h-[410px] lg:w-72 h-[470px] lg:h-[420px] border-zinc-900 dark:border-zinc-100 rounded-lg p-2 shadow-md">
            <div className=' relative flex-wrap w-full lg:w-64'>
                <img
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full rounded-md" 
                />
                <p className="text-base mt-2 absolute top-24 left-1 text-white bg-black px-2 py-1">₹ {totalPrice}</p>
                <h3 className="text-base font-semibold py-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm h-16 overflow-hidden">{product.description}</p>            
            </div>
            
            <div className=" flex justify-between">
                <div className="w-[38%]">
                    <label className="block mt-2 text-[12px]">Size:</label>
                    <select 
                        value={selectedSize.name} 
                        onChange={(e) => {
                            const selected = product.sizes.find(size => size.name === e.target.value);
                            setSelectedSize(selected);
                        }} 
                        className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                    >
                        {product.sizes.map((sizeOption) => (
                            <option key={sizeOption.name} value={sizeOption.name}>{sizeOption.name}</option>
                        ))}
                    </select>
                </div>
                
                <div className="w-[60%]">
                    <label className="block mt-2 text-[12px]">Crust:</label>
                    <select 
                        value={selectedCrust.name} 
                        onChange={(e) => {
                            const selected = product.crust.find(crust => crust.name === e.target.value);
                            setSelectedCrust(selected);
                        }} 
                        className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                    >
                        {product.crust.map((crustOption) => (
                            <option key={crustOption.name} value={crustOption.name}>{crustOption.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-2">
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

            <div className="mt-3">
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

export default PizzaCard;