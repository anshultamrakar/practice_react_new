import React from 'react'
import { useContext } from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FoodContext } from '../Context/FoodContext'
import Inputs from './Inputs'
const MenuPage = () => {
    const {isLoading , foods , handleCart , cartItems } = useContext(FoodContext)
  return (
    <div>
       <Inputs/>
        <h4>Menu</h4>
        <ul className='foodList'>
        { isLoading ? <p style = {{textAlign : "center"}}>Loading.....</p> : foods.map(food => (
        <li key = {food.id}>
         <img src = {food.image} alt = "food" width = "250" height = "300"/>
         <h4>{food.name}</h4>
         <p> Description :{food.description}</p>
         <p>Price : {food.price}</p>
         <p>Delivery Time : {food.delivery_time}</p>
         <button onClick={() => handleCart(food)} > {cartItems.some(cart => cart.id === food.id) ?<Link to = "/cart">Go to cart</Link>  : "Add to cart"}</button>
        </li>
       ))}
        </ul>
      
    </div>
  )
}

export default MenuPage