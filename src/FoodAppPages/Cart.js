import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../Context/FoodContext'

const Cart = () => {
    const {cartItems} = useContext(FoodContext)
  return (
    <div>
        <h4>Cart</h4>
        <h4>Total Delivery Time :</h4>
        <h4>Total Price :</h4>
        <button>Apply Coupon</button>
        <br/>
        <br/>
        <ul className='foodList'>
        {cartItems.map(food => (
            <li key = {food.id}>
            <img src = {food.image} alt = "food" width = "250" height = "300"/>
            <p> Description :{food.description}</p>
            <p>Price : {food.price}</p>
            <p>Delivery Time : {food.delivery_time}</p>
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default Cart