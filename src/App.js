
import './App.css';
import 'flowbite';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
