'use client';
import { createContext, useMemo, useReducer } from "react";


// Reducer function to manage cart state
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    quantity: action.quantity,
                    image: action.image,
                    sizeId: action.sizeId,
                    sizes: action.sizes,
                    crustId: action.crustId,
                    crust: action.crust,
                }
            ];

        case "UPDATE":
            return state.map((food) => {
                if (food.id === action.id && food.sizeId === action.sizeId && food.crustId === action.crustId) {
                    return {
                        ...food,
                        quantity: parseInt(action.quantity) + parseInt(food.quantity),
                        price: parseInt(action.price) + parseInt(food.price) + "/-"
                    };
                }
                return food;
            });

        case "INCREMENT":
            return state.map((food) => {
                if (food.id === action.id && food.sizeId === action.sizeId && food.crustId === action.crustId) {
                    return {
                        ...food,
                        quantity: food.quantity + 1,
                        price: (parseInt(food.price) + parseInt(action.price)) + "/-"
                    };
                }
                return food;
            });

            case "DECREMENT":
                return state.map((food) => {
                    if (food.id === action.id && food.sizeId === action.sizeId && food.crustId === action.crustId) {
                        if(food.quantity === 1){
                            console.log("Item quantity cannot be less than 1");
                        }else{
                            return {
                                ...food,
                                quantity: food.quantity - 1, // Decrease quantity without restriction
                                price:  (parseInt(food.price) - parseInt(action.price)) + "/-"
                            };
                        }
                    }
                    return food; 
                });

        case "REMOVE":
            return state.filter((food) => !(food.id === action.id && food.sizeId === action.sizeId && food.crustId === action.crustId));

  
    }
};

// Create CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};