
import React, { useContext } from 'react'
import "./product.css"
import { AppContext } from './shopContext'

export const Product = () => {

 const {products,addToCart}=useContext(AppContext)

     return (
        <div className='product'>
         {products.map((product)=>(
        <div className='i-product'>
            <h2>
         {product.image}
         <br></br>
         <div className='card-i'>
       <div className='info1'>
       {product.productName}
        <br></br>
       </div>
       <div className='price'>
          
       {product.price}
       <br></br>
       </div>
        <button  onClick={()=>addToCart(product)}>ADD TO CART</button>
        </div> </h2>
</div>

         ))}
        
       </div> 
      )

   }