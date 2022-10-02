import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/111 shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./card-icon.style.scss";

import React from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggoleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggoleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
