import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className='Home'>
        <h1>Welcome to neoG Food Ordering App</h1>
        <br/>
        <br/>
        <Link to = "/menu"> <button> GO TO MENU </button> </Link>
        
    </div>
  )
}

export default Home