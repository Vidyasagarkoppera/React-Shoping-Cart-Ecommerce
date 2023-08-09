import React,{useContext} from "react";
import { shopContex } from "./Shop-contex";

const CartItem=(props)=>{
    const {id, ProductName, Price, ProductImage}=props.data;
    const { cartItems, addToCart, removeFromCart,updateCartItemCount} =useContext(shopContex)
    return(
        <div className="cartItem">
             <img src={ProductImage} alt="" />
             <div className="description">
                <b><p>{ProductName}</p></b>
                <p>${Price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                    <button onClick={()=>addToCart(id)}>+</button>
                </div>
             </div>
        </div>
    )
}
export default CartItem