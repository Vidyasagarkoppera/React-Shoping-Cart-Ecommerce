import { PRODUCTS } from "./Products"
import Product from './Product'
import '../Asserts/Css/Index.css'

const Shoping=()=>{
    return(
        <div>
            <div>
                <h1>Shoping</h1>
            </div>
            <div className="products">{PRODUCTS.map((product)=>(
                <Product data={product}/>
            ))}</div>
        </div>
    )
}
export default Shoping