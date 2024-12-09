import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCart } from '../features/cart/cartSlice';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
    alert('Product removed from cart.');
  };

  // Calculate the total price, defaulting to 0 if undefined
  const totalPrice = cart.totalPrice ? cart.totalPrice : 0;

  return (
    <div className={styles.container}>
      <h1>Cart</h1>
      
      {/* Check if the cart is empty */}
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Loop through cart items and display them */}
          {cart.items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          {/* Show the total price */}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}
