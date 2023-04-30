import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FoodContext } from '../Context/FoodContext'

const Navbar = () => {
   const {cartItems} = useContext(FoodContext)
  return (
    <div>
        <ul className='navbarlist'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/menu">Menu</Link></li>
            <li> <Link to = "/cart">Cart({cartItems.length})</Link></li>
        </ul>
    </div>
  )
}

export default Navbar