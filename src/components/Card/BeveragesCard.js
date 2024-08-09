'use client';
import React, { useContext, useState } from 'react';
import { CartContext } from '@/utils/ContextReducer';

const BeveragesCard = ({ product }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const {state, dispatch} = useContext(CartContext);

    // Calculate total price based on selected size and quantity
    const totalPrice = selectedSize.price * selectedQuantity;

    const handleAddToCart = () => {
        // alert(`Added to cart:\n${selectedQuantity} x ${product.name} (${selectedSize.name} - ₹${totalPrice})`);
        dispatch({
            type:"ADD",
            name: product.name,
            sizes: selectedSize,
            price: totalPrice,
            quantity: selectedQuantity,
            image: product.image,
        })
        console.log(state)
    };

    return (
        <div className="border w-full mx-auto my-5 md:w-60 md:h-[420px] lg:w-72 h-[425px] lg:h-[420px] border-zinc-900 dark:border-zinc-100 rounded-lg p-2 shadow-md">
            <div className='relative flex-wrap'>
                <div className="h-48 w-full relative rounded-md overflow-hidden">
                    <img
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-cover rounded-md" 
                    />
                    <p className="text-base mt-2 absolute bottom-2 left-1 text-white bg-black px-2 py-1">₹ {totalPrice}</p>
                </div>
                <h3 className="text-base font-semibold py-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm h-16 overflow-hidden">{product.description}</p>            
            </div>

            <div className="flex justify-between">
                <div className="w-[60%]">
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
                
                <div className="w-[36%]">
                    <label className="block mt-2 text-[12px]">Quantity:</label>
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

export default BeveragesCard;