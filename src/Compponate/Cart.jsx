import { PRODUCTS } from "./Products"
import { shopContex } from "./Shop-contex"
import React,{useContext,} from "react"
import CartItem  from "./Cart-item"
import '../Asserts/Css/Index.css'
import {useNavigate} from 'react-router-dom'

const Cart=()=>{
    const { cartItems,getTotalCartAmount} =useContext(shopContex)
    const totalAmount=getTotalCartAmount()

    const navigate=useNavigate()
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="CartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id]!== 0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
             {totalAmount > 0 ? (
            <div className="checkout">
                <p>Subtotal:${totalAmount}</p>
                <button onClick={()=>navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
             ) : (
<h1>Your Cart is Empty</h1>
)}
        </div>
    )
}
export default Cart