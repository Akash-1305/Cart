import React,{useState} from 'react';
import'./App.css';
import Product from './Product';
import Cart from './Cart';
import pro from './pro.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';

const products=[
  {id:1,name:"T-shirt",price:300, image:pro},
  {id:2,name:"Pant", price:500,  image:product2},
  {id:3,name:"Watch", price:1500, image:product3}
]
function App(){
  const[cart,setCart]=useState([]);

  const AddtoCart=(product)=>{
  setCart([...cart,product]);
  };

  const removefromcart=(product)=>{
    setCart(cart.filter((item)=>item.id !== product.id));
  };
  return(
    <div>
      <h1 id="shopping"><center>Shop here</center></h1>
      <div>
        {products.map((product)=>(
        <Product product={product}onAddtoCart={AddtoCart}/>
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={removefromcart}/>
    </div>
  );
}
export default App;