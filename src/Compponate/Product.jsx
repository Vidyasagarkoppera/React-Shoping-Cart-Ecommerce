import { useContext } from "react";
import { shopContex } from "./Shop-contex";

const Products=(props)=>{
    const {id, ProductName, Price, ProductImage}=props.data;
    const {addToCart, cartItems} =useContext(shopContex)

    const cartItemAmount=cartItems[id]
    return(
        <div className="product">
            <img src={ProductImage} alt="" />
            <div className="description">
                <b><p>{ProductName}</p></b>
                <b><p>${Price}</p></b>
            </div>
            <button className="addCart" onClick={()=>addToCart(id)}>Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
        </div>
    )
}
export default Products