import { createContext } from "react";
import { fakeFetch } from "../api/fakefetch2";
import { useState , useEffect } from "react";



export const FoodContext = createContext()

const FoodProvider = ({children}) => {
    const [foods , setFoods ] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [cartItems , setCartItems] = useState([])


    const getMenuData = async() => {
       try{
        const {data , status} = await fakeFetch('https://example.com/api/menu')
          if(status === 200){
            setFoods(data.menu)
            setIsLoading(false)
          }
       }catch(err){
        console.error(err)
       }
    }

    useEffect(() => {
        getMenuData()
    },[])


    const handleCart = (food) => {
        const cartList = [...cartItems , food]
        setCartItems(cartList)
    }



    return(
        <FoodContext.Provider value = {{foods , isLoading , handleCart , cartItems }}>
          {children}
        </FoodContext.Provider>
    )
}

export default FoodProvider

