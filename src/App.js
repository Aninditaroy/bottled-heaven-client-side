
import './App.css';
import 'flowbite';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Perfumes from './components/Home/Perfumes/Perfumes';
function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/perfumes' element={<Perfumes/>}></Route>
      </Routes>
    </>
  );
}

export default App;
