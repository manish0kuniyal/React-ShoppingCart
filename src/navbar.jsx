import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='name'>SHOPPING CART</div>
    <div className="links">
     <Link className='shop' to="/">SHOP</Link>

     <Link className='cart' to="/cart">CART</Link>
   
    </div>
    </div>
  )
}
