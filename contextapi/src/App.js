
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light":"dark"}`}>
     
      <Navbar/>
      <Body/>
      
   
    </div>
  );
}

export default App;
