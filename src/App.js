
import './App.css';
import 'flowbite';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import 'tw-elements';
import Register from './components/Login/Register/Register';
import Inventories from './components/Home/Inventories/Inventories';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import InventoryDetails from './components/Home/InventoryDetails/InventoryDetails';
import MyInventory from './components/MyInventory/MyInventory';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddInventories from './components/AddInventories/AddInventories';
import Notfound from './components/NotFound/Notfound';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventories' element={<Inventories />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetails />
          </RequireAuth>
        }></Route>
        <Route path='/addinventories' element={
          <RequireAuth>
            <AddInventories />
          </RequireAuth>
        }></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        }></Route>
        <Route path='/myinventory' element={
          <RequireAuth>
            <MyInventory />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
