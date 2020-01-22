import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/11.2 shopping-bag.svg";
import { toggleCartHidden } from "../../reducer/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsCount } from "../../reducer/cart/cart.selectors";

const CartIcon = () => {

  const quantity = useSelector(state =>
    selectCartItemsCount(state)
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
