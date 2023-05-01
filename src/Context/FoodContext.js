import { createContext } from "react";
import { fakeFetch } from "../api/fakefetch2";
import { useState , useEffect } from "react";



export const FoodContext = createContext()

const FoodProvider = ({children}) => {
    const [foods , setFoods ] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [cartItems , setCartItems] = useState([])
    const [isVeg , setIsVeg] = useState(false)
    const [isSpicy , setIsSpicy] = useState(false)
    const [search, setSearch] = useState("")
    const [searchResult , setSearchResult] = useState([])


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


    useEffect(() => {
     const filterResult = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
     setSearchResult(filterResult)
    }, [foods , search])


    const handleCart = (food) => {
       if(cartItems.some(cart => cart.id === food.id)){
        setCartItems(cartItems.filter(cart => cart.id !== food.id))
       }else{
        setCartItems([...cartItems , food])
       }
    }



    return(
        <FoodContext.Provider value = {{foods , isLoading , handleCart , cartItems 
            , isVeg , setIsVeg , isSpicy , setIsSpicy  , search , setSearch
        }}>
          {children}
        </FoodContext.Provider>
    )
}

export default FoodProvider

