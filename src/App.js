import {Route,Routes} from 'react-router-dom'
import Shoping from './Compponate/Shoping';
import Cart from './Compponate/Cart';
import Navbar from './Compponate/Navbar';
import ShopContexProvider from './Compponate/Shop-contex';

function App(){
  return(
    <div>
      <ShopContexProvider>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Shoping/>}/>
         <Route path='/Cart' element={<Cart/>}/>
       </Routes>
       </ShopContexProvider>
    </div>
  )
}
export default App;