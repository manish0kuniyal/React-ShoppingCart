import React from "react";
import "./shopcontext.css"


import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const ShopContext = (props) => {
  let k = "from-context";
  const [cart, setCart] = useState([]);
  const products = [


    { id: 3,
      productName: "Action Figure", 
      price: "$"+90,
      image:<img src="https://cdn.shopify.com/s/files/1/0238/7617/products/AAIB0915AAET0079-1_1600x.jpg?v=1622045831"
      alt=""/> },

      { id: 3,
        productName: "Hoodie", 
        price: "$"+135,
        image:<img src="https://cdn.shopify.com/s/files/1/0587/2605/6143/products/T-Logo-Hoodie-ULTRAMARINE1_71649bf3-8424-4bd1-a296-2c2034b168d8_1200x1200.jpg?v=1676601610"
        alt=""/> },
        
    
      { id: 2, 
        productName: "ToolBOX", 
        price: "$"+22 ,
        image:<img src="https://m.media-amazon.com/images/I/91JQZ+jOi4L.jpg
        " alt="" />
   
         },

    { id: 3, 
      productName: "Nokia",
       price: "$"+10,
      image:<img src="https://cdn.shopclues.com/images1/thumbnails/105921/640/1/149394621-105921938-1664659537.jpg"
      alt=""/>
      },

    { id: 1, 
      productName: "Basketball",
      price: "$"+15 ,
      image:<img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png" alt="" />
    },

    { id: 2, 
      productName: "Book", 
      price: "$"+22 ,
      image:<img src="https://media.shortform.com/covers/png/the-80-20-principle-cover@8x.png
      " alt="" />
 
       },{ id: 3,
        productName: "Rich Mill", 
        price: "$"+5,
        image:<img src="https://cdn.shopify.com/s/files/1/0610/0274/4038/products/RM11-03RG-GREEN_1200x.jpg?v=1636971673"
        alt=""/> }
  
  


     
  
       

  ];
  const addToCart = (product) => {
    console.log("product", product);
    setCart([...cart, product]);
    console.log("---array---", ...cart);
    console.log("---cartarray---", product.id);
  };

  const removeFromCart = (product) => {
    ///let itemIndex=cart.findIndex(product)
    //console.log(itemIndex)
    // console.log("removed", product);
    // console.log("cart",cart)
    //  console.log("iii",cart.indexOf(product))
    //  console.log("....",cart.splice(cart.indexOf(product),1))
    //  console.log("++++",cart)
    //  console.log("----",product.remove)
      let index=cart.indexOf(product)
     let newCart=[...cart]
      newCart.splice(index,1)
      setCart(newCart)
    };

  return (
    <AppContext.Provider
      value={{ k, cart, products, addToCart, removeFromCart }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
