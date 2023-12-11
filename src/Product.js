import React from 'react';
import './App.css'
function Product({product,onAddtoCart}){
return (
    <div>
        <h2 id="product-name">{product.name}</h2>
        <img src={product.image} style={{height: "200px", width: "300px"}}/>
        <p id="product-price">{product.price}</p>
        <button onClick={()=>onAddtoCart(product)} id="product-button">Add to cart</button>
    </div>
);
}
export default Product;