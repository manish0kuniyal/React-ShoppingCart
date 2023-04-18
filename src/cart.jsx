import React, { useContext } from 'react'
import { AppContext } from './shopContext'
import "./product.css"

export const Cart = () => {
  const {cart,addToCart,k,removeFromCart}=useContext(AppContext)

  return (
    <div className="product">
    {cart.map((product)=>(
    <div className='i-product'>
       {product.image}
       <br></br>
       <div className='card-i'>
       <div className='info1'>
       {product.productName}
       <br></br></div>
       <div className='price'>
       {product.price}
       <br></br></div>
       <button className='remove' onClick={()=>removeFromCart(product)}>Remove Item</button>
       </div>  </div>
         ))}
       

      
    </div>
  )
}
