'use client';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../utils/ContextReducer';
import Image from 'next/image';

const PizzaCard = ({ product }) => {
    console.log(product);
    // Initialize states with fallback values
    const [selectedSize, setSelectedSize] = useState(product.price[0] || { value: 0 }); // Default to an object with value 0
    const [selectedCrust, setSelectedCrust] = useState(product.crust[0] || { value: 0 }); // Default to an object with value 0
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { state, dispatch } = useContext(CartContext);
    
    // Calculate total price based on selected size, crust, and quantity
    const totalPrice = (selectedSize.value + selectedCrust.value) * selectedQuantity + "/-";

    const handleAddToCart = () => {
        const existingItem = state.find(item => item.tempid === product.name + selectedSize.size + selectedCrust.crust);
        
        if (!existingItem) {
            dispatch({
                type: "ADD",
                name: product.name,
                tempid: product.name + selectedSize.size + selectedCrust.crust,
                sizes: selectedSize,
                crust: selectedCrust,
                price: totalPrice,
                quantity: selectedQuantity,
                image: product.img, // Use img from the new data structure
            });
            return;
        }

        if (existingItem) {
            dispatch({
                type: "UPDATE",
                name: product.name,
                tempid: product.name + selectedSize.size + selectedCrust.crust,
                sizes: selectedSize,
                crust: selectedCrust,
                price: totalPrice,
                quantity: selectedQuantity,
                image: product.img,
            });
        }
    };

    return (
        <div className="border-[1px] mx-auto my-5 w-full md:w-60 md:h-[450px] lg:w-72 h-[470px] lg:h-[470px] border-zinc-900 dark:border-zinc-100 rounded-lg p-2 shadow-md">
            <div className='relative flex-wrap'>
                <div className="h-48 w-full relative rounded-md overflow-hidden">
                    <Image 
                        src={product.img} 
                        alt={product.name} 
                        className="object-cover w-full h-full bg-red-100 "
                        width={271}
                        height={194}
                    />
                    <p className="text-base mt-2 absolute bottom-2 left-1 text-white bg-black px-2 py-1">₹ {totalPrice}</p>
                </div>
                <h3 className="text-base font-semibold py-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm h-16 overflow-hidden">{product.description}</p>            
            </div>
            
            <div className="flex justify-between">
                <div className="w-[38%]">
                    <label className="block mt-2 text-[12px]">Size:</label>
                    <select 
                        value={selectedSize.size} 
                        onChange={(e) => {
                            const selected = product.price.find(size => size.size === e.target.value);
                            setSelectedSize(selected || { value: 0 }); // Fallback to prevent undefined
                        }} 
                        className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                    >
                        {product.price.map((sizeOption) => (
                            <option key={sizeOption._id} value={sizeOption.size}>{sizeOption.size}</option>
                        ))}
                    </select>
                </div>
                
                <div className="w-[60%]">
                    <label className="block mt-2 text-[12px]">Crust:</label>
                    <select 
                        value={selectedCrust.crust} 
                        onChange={(e) => {
                            const selected = product.crust.find(crust => crust.crust === e.target.value);
                            setSelectedCrust(selected || { value: 0 }); // Fallback to prevent undefined
                        }} 
                        className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                    >
                        {product.crust.map((crustOption) => (
                            <option key={crustOption._id} value={crustOption.crust}>{crustOption.crust}</option>
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
                    {[1, 2, 3, 4, 5].map((quantityOption) => (
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