import {  Route, Routes } from 'react-router-dom';
import './App.css';

import ProductOwnerAddScreen from "./pages/ProductOwnerAdd";
import ProductOwnerScreen from "./pages/ProductOwnerScreen";
import OwnerOwnedProductScreen from "./pages/OwnerOwnedProductScreen";
import SelectedProductScreen from "./pages/SelectedProductScreen";
import AddProductScreen from "./pages/AddProduct";

import Navbar from "./components/Navbar";

function App() {
  return (
      <div>

        <Routes>
            <Route path={'/'} element={ <ProductOwnerScreen/> }/>
            <Route path={'/add-owner'} element={ <ProductOwnerAddScreen/> }/>
            <Route path={'/owner/:id'} element={ <OwnerOwnedProductScreen/> }/>
            <Route path={'/product/:id/:own_id'} element={ <SelectedProductScreen/> }/>
            <Route path={'/add-product/:id'} element={ <AddProductScreen/> }/>
        </Routes>
      </div>
  );
}

export default App;
