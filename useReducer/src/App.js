

import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { CartProvider } from './Context/CartContext';
// import { CartProvider } from './Context/CartContext';
// import UseReducer from './Components/UseReducer';



function App() {
 
  return (
    <div className="App">
      {/* <UseReducer/> */}
      <CartProvider>
      <Navbar/>
      <Body/>
      </CartProvider>
      
      
    </div>
  );
}

export default App;
