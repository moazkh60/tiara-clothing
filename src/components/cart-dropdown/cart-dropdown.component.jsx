import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../reducer/cart/cart.selectors";
import { toggleCartHidden } from '../../reducer/cart/cart.actions'

const CartDropdown = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => selectCartItems(state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
