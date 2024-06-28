import React from 'react';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';
import FoodDetails from './components/FoodDetails';
import Home from './components/Home';
import CartItems from './components/CartItems';

const App = () => {
  return (<> 
    <section className="relative bg-body overflow-hidden  bg-blue-950">
     <Navbar />
     
      <Routes> 
        <Route  path="/" element={<Home />} /> 
        <Route path="/food/:id" element={<FoodDetails />} /> 
        <Route path='cart'element={<CartItems/>}/>
      </Routes>
    </section>
    </>
  );
}

export default App;
