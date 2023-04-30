import React from 'react'
import './App.css';
import Home from './FoodAppPages/Home'
import MenuPage from './FoodAppPages/MenuPage'
import Cart from './FoodAppPages/Cart'
import Navbar from './FoodAppPages/Navbar'
import {Routes , Route} from "react-router-dom"
import FoodProvider from './Context/FoodContext';

const FoodApp = () => {
  return (
    <div className='App'>
      <FoodProvider>
      <Navbar/>
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/menu" element = {<MenuPage/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        </Routes>
      </FoodProvider>
  
    </div>
  )
}

export default FoodApp