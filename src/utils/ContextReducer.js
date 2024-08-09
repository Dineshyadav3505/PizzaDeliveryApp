'use client';
import { createContext, useMemo, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [ ...state, 
                {
                    name: action.name,
                    price: action.price,
                    quantity: action.quantity,
                    image: action.image,
                    sizes: action.sizes,
                    crust: action.crust,

                }];
        case "INCREMENT":
            return [ ...state, 
                {
                    quantity: action.quantity + 1,
                }
            ]

        case "DECREMENT":
            return [ ...state, 
                {
                    quantity: action.quantity - 1,
                }
            ]

        case "CLEAR":
            return [ ...state, 
                {
                    quantity: 0,
                }
            ]

        case "UPDATE":
            return state.map(item => {
                if(item.name === action.name){
                    return {
                       ...item,
                        quantity: action.quantity
                    }
                }
                return item
            })
    
        default:
            console.log("Invalid action type")
    }

}

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer,[])
    const contexValue = useMemo(()=>{
        return { state, dispatch }
    },[state,dispatch])

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )

};