import React from 'react';
  import Calculate from "./Calculate.js";
  import'./App.css';
 

  function Cart({ cart, onRemoveFromCart }) {
    return (
      <div className="cart">
        <center>
          <h2>Cart</h2>
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                {item.name}<br/>
                <img src={item.image} style={{ height: '200px', width: '300px' }} alt={item.name} /><br/>
                {item.price}<br/>
                <button onClick={() => onRemoveFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
          <button id='Proceed' onClick={() => Calculate(cart)}>Proceed</button>
        </center>
      </div>
    );
  }

  export default Cart;