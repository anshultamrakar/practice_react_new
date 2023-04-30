import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul style = {{listStyleType : "none"}} >
           <Link><li>Inbox</li></Link> 
           <Link><li>Sent</li></Link> 
        </ul>
    </nav>
  )
}

export default Navbar