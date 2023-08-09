import {Link} from 'react-router-dom'
import '../Asserts/Css/Index.css'

const Navbar=()=>{
    return(
        <div className='links'>
            <Link to="/">Shoping</Link>
            <Link to="/Cart"><i class="fa-solid fa-cart-shopping "></i></Link>
        </div>
    )
}
export default Navbar