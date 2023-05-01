import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../Context/FoodContext'

const Inputs = () => {
    const {setIsVeg , isVeg , isSpicy , setIsSpicy , search , setSearch} = useContext(FoodContext)
  return (
    <div>
           <div className='forms_inputs'>
            <label htmlFor='search'>Search</label>
            <input id = "search" type = "text" placeholder='Search' value = {search} onChange={(e) =>setSearch(e.target.value)} />
            <input id = "veg" type = "checkbox" defaultChecked = {isVeg} value = {isVeg} onChange={() => setIsVeg(!isVeg)}/>
            <label htmlFor='veg'>Veg </label>
            <input id = "spicy" type = "checkbox" defaultChecked = {isSpicy} value = {isSpicy} onChange={() => setIsSpicy(!isVeg)}/>
            <label htmlFor='spicy'>Spicy  </label>
            <input type = "radio"/>
            <label >Sort (Price) low to high </label>
            <input type = "radio"/>
            <label>Sort (Price) high to low </label>
        </div>
    </div>
  )
}

export default Inputs