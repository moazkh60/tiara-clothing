import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/11.2 shopping-bag.svg";
import { toggleCartHidden } from "../../reducer/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {

  const quantity = useSelector(state =>
    state.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem + quantity,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

export default CartIcon;
