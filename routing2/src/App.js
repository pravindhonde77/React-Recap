import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Feeds from './Pages/Feeds';
import RequiredAuth from './hoc/RequiredAuth';
import Posts from './Pages/Posts';
import Carrer from './Pages/Carrer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feeds' element={
          <RequiredAuth><Feeds /></RequiredAuth>
        } />
        <Route
          path='posts'
          element={
            <RequiredAuth><Posts /></RequiredAuth>
          }
        />
        <Route
          path='careers'
          element={
            <RequiredAuth><Carrer /></RequiredAuth>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
