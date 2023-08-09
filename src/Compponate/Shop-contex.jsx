import React,{createContext, useState} from "react"
import { PRODUCTS } from "./Products"
export const shopContex=createContext(null)

const getDefaultCart=()=>{
     let cart={}
     for(let i=1; i<PRODUCTS.length +1; i++){
        cart[i]=0
     }
     return cart
}
const ShopContexProvider=(props)=>{
    const [cartItems, setCartItems]=useState(getDefaultCart)

    const getTotalCartAmount=()=>{
        let totalAmount=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=PRODUCTS.find((product)=>product.id === Number(item))
                totalAmount += cartItems[item]*itemInfo.Price
            }
        }
        return totalAmount;
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    } 

    const contexValue={cartItems,addToCart, removeFromCart,updateCartItemCount,getTotalCartAmount }

  
    return(
        <shopContex.Provider value={contexValue}>{props.children}</shopContex.Provider>
    )
}
export default ShopContexProvider