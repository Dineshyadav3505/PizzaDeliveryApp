'use client';
import { createContext, useMemo, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [ ...state, 
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
            let arr = [ ...state];
            arr.find((food, index) =>{
                if(food.tempid === action.tempid){
                    console.log(food)
                    // arr[index] = {...food, quantity:parseInt(action.quantity)+ parents(food.quantity), 
                    //     price:parseInt(action.price)+ parents(food.price)}
                }
            })
            return arr;
    
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