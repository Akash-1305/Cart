import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pro from './pro.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';

const products = [
  { id: 1, name: 'T-shirt', price: 550, image: pro },
  { id: 2, name: 'Jeans', price: 850, image: product2 },
  { id: 3, name: 'Watch', price: 1099, image: product3 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); 
  const [placedOrder, setPlacedOrder] = useState(false);
  
  const addToCart = (productId) => {
    const productToAdd = products.find((p) => p.id === productId);
    setCart((prevCart) => [...prevCart, { product: productToAdd, quantity: 1 }]);
  };

  const modifyCart = (productId, action) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId) {
          if (action === 'add') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'remove' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId) =>
    setCart((prevCart) =>
      prevCart.filter((item) => item.product && item.product.id !== productId)
    );

    const getTotal = () => {
      return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };
    

   
  const isValidName = (name) => /^[a-zA-Z ]+$/.test(name);
  const getCustomerInput = (promptText) => prompt(promptText)?.trim();

  const placeOrder = () => {
    const customerName = getCustomerInput('Enter your name:');
    if (!customerName) return alert('Order canceled. No information provided.');
    const paymentMethod = getCustomerInput('Choose payment method (Online / Cash):');

    if (!paymentMethod)
      return alert('Please fill in all the required information.');
    if (!isValidName(customerName))
      return alert('Please enter a valid name containing only alphabets and spaces.');

    const validPaymentMethods = ['Online', 'Cash'];
    if (!validPaymentMethods.includes(paymentMethod))
      return alert('Please choose a valid payment method.');

    const totalAmount = getTotal();
    setPlacedOrder(true);
    setCart([]);
    alert(`Order placed successfully! Thank you for your purchase. Total Amount: ₹${totalAmount}`);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {view === 'products' && (
        <div>
          <h2>Products List</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className='shopping-cart'>
                  <img src={product.image} alt={product.name} className="product-image" height={"200px"} width={"300px"} margin={"0px"} /><br></br>
                  {product.name} - ₹{product.price}<br></br>
                  <button onClick={() => addToCart(product.id)} aria-label={`Add ${product.name} to Cart`} className="add-to-cart-button">
                    Add to Cart</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => setView('cart')}>View Cart</button>
        </div>
      )}

      {view === 'cart' && (
        <div className="right-side">
          <h3>My Cart List</h3><br></br>
          <ul>
            {cart.map((item) => (
              <li key={item.product.id}>
                <div className='shopping-cart'>
                  <img src={item.product.image} alt={item.product.name} className="cart-image" height={"200px"} width={"300px"} margin={"0px"} /><br></br>
                  {item.product.name} - ₹{item.product.price} - Quantity: {item.quantity}<br></br>
                  <button onClick={() => modifyCart(item.product.id, 'add')} className="add-button">+</button>
                  <button onClick={() => modifyCart(item.product.id, 'remove')} className="remove-button">-</button>
                  <button onClick={() => removeFromCart(item.product.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>

          Total: ₹{getTotal()}
          <div className='shopping-cart'>
            {cart.length > 0 && <button onClick={placeOrder} className="order-button">Place Order</button>}
            <br></br>
            <button onClick={() => setView('products')}>Back to Products</button>
          </div>
        </div>
      )}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShoppingCart />);