'use client';
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

const MenuCard = ({ product }) => {
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
        <div className=" border-[1px] border-zinc-900 dark:border-zinc-100 rounded-lg p-2 shadow-md">
            <div className=' relative'>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    className="w-64 bg-red-900 object-cover rounded-md" 
                    width={256} 
                    height={160} 
                />
                <p className="text-base mt-2 absolute bottom-14 left-1 text-white bg-black px-2 py-1">₹ {totalPrice}</p>
                <h3 className="text-base font-semibold py-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm">{product.description}</p>            
            </div>
            
            <div className=" flex justify-between">
                <div className="w-[45%]">
                    <label className="block mt-2 text-[12px]">Size:</label>
                    <select 
                        value={selectedSize.name} 
                        onChange={(e) => {
                            const selected = product.sizes.find(size => size.name === e.target.value);
                            setSelectedSize(selected);
                        }} 
                        className="border outline-none text-xs rounded-md p-1  mt-2"
                    >
                        {product.sizes.map((sizeOption) => (
                            <option key={sizeOption.name} value={sizeOption.name}>{sizeOption.name}  -₹{sizeOption.price}</option>
                        ))}
                    </select>
                </div>
                
                <div className="w-[47%]">
                    <label className="block mt-2 text-[12px]">Choose Crust:</label>
                    <select 
                        value={selectedCrust.name} 
                        onChange={(e) => {
                            const selected = product.crust.find(crust => crust.name === e.target.value);
                            setSelectedCrust(selected);
                        }} 
                        className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                    >
                        {product.crust.map((crustOption) => (
                            <option key={crustOption.name} value={crustOption.name}>{crustOption.name}  -₹{crustOption.price}</option>
                        ))}
                    </select>
                </div>
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

export default MenuCard