'use client';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../utils/ContextReducer';
import Image from 'next/image';

const BeveragesCard = ({ product }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.price[0]); // Initialize with the first size
    const { state, dispatch } = useContext(CartContext);
    const quantityOptions = [1, 2, 3, 4, 5];

    // Calculate total price based on selected size and quantity
    const totalPrice = selectedSize ? selectedSize.value * selectedQuantity + "/-" : "N/A";

    const handleAddToCart = () => {
        if (selectedSize) {
            dispatch({
                type: "ADD",
                name: product.name,
                tempid: product.name + selectedSize.size,
                sizes: selectedSize,
                price: selectedSize.value, // Store the base price
                quantity: selectedQuantity,
                image: product.img, // Use img from the product data
            });
            console.log(state);
        } else {
            alert("Please select a size before adding to the cart.");
        }
    };

    return (
        <div className="border w-full mx-auto my-5 md:w-60 md:h-[420px] lg:w-72 h-[425px] lg:h-[420px] border-zinc-900 dark:border-zinc-100 rounded-lg p-2 shadow-md">
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
                <div className="w-[60%]">
                    <label className="block mt-2 text-[12px]">Size:</label>
                    <select 
                        value={selectedSize.size} 
                        onChange={(e) => {
                            const selected = product.price.find(size => size.size === e.target.value);
                            setSelectedSize(selected);
                        }} 
                        className="border outline-none text-xs rounded-md p-1 w-full mt-2"
                    >
                        {product.price.map((sizeOption) => (
                            <option key={sizeOption._id} value={sizeOption.size}>{sizeOption.size}</option>
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
                        {quantityOptions.map((quantityOption) => (
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