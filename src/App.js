
import './App.css';
import 'flowbite';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import 'tw-elements';
import Register from './components/Login/Register/Register';
import Inventories from './components/Home/Inventories/Inventories';
function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/inventory' element={<Inventories/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
