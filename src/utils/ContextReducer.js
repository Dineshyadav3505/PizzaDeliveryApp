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
                console.log(state)

        case "REMOVE":
            return [ ...state, "action"];
        
    
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