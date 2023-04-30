import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../Context/FoodContext'

const MenuPage = () => {
    const {isLoading , foods , handleCart } = useContext(FoodContext)
    
  return (
    <div>
        <div className='forms_inputs'>
            <input type = "text" placeholder='Search'/>
           
            <input type = "checkbox"/>
            <label>Veg </label>
           
            <input type = "checkbox"/>
            <label>Spicy  </label>
           
            <input type = "radio"/>
            <label>Sort (Price) low to high </label>
           
            <input type = "radio"/>
            <label>Sort (Price) high to low </label>
        </div>
        <h4>Menu</h4>
        <ul className='foodList'>
        { isLoading ? <p style = {{textAlign : "center"}}>Loading.....</p> : foods.map(food => (
        <li key = {food.id}>
         <img src = {food.image} alt = "food" width = "250" height = "300"/>
         <p> Description :{food.description}</p>
         <p>Price : {food.price}</p>
         <p>Delivery Time : {food.delivery_time}</p>
         <button onClick={() => handleCart(food)} >Add to cart</button>
        </li>
       ))}
        </ul>
      
    </div>
  )
}

export default MenuPage