import { X } from "lucide-react";
import Button from "../Button/Button";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const Cart = ({
  onClose,
  className = "",
}: {
  onClose: () => void;
  className?: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart ${className}`}>
      <div className="cart-top">
        <h3>Your Cart</h3>
        <X onClick={onClose} />
      </div>
      <hr />

      {items.length === 0 ? (
        <div className="cart-elem">
          <p>No items yet.</p>
          <Button
            name="VIEW PRODUCTS"
            style="white"
            to="/shop"
            onClick={onClose}
          />
        </div>
      ) : (
        <div>
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>${item.price} USD</p>
                  {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                  <span
                    className="remove-product"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </span>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <hr />

          <div className="cart-subtotal">
            <p>Subtotal:</p>
            <h3>${subtotal.toFixed(2)} USD</h3>
          </div>

          <Button name="CHECKOUT" style="black-button" to="/checkout" />
        </div>
      )}
    </div>
  );
};

export default Cart;
