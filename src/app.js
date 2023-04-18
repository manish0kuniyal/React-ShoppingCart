import React from 'react'
import{BrowserRouter as Router, Route,Routes} from "react-router-dom"
import "./app.css"
import { Cart } from './cart'
import { ShopContext } from './shopContext'
import { Product } from './product'
import { Navbar } from './navbar'

const App = () => {
  return (<>
<div className='App'>
  
  <ShopContext>
  <Router>
    <Navbar/>
  <Routes >
     <Route  path="/" element={<Product/>} />
     <Route path="/cart" element={<Cart/>} />
  
  </Routes>
  </Router>
  
  </ShopContext>
  </div>
    </>)
}
export default App