import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_CART_MODAL, OPEN_CART_MODAL } from "../../store/actions/changes";
import {
  selectCartItems,
  selectIsModalCartOpen,
} from "../../store/selectors/mainSelector";

export const useCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const cartItems = useSelector(selectCartItems);
  const isModalCartOpen = useSelector(selectIsModalCartOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems.length > 0) {
      fetch("http://localhost:3001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      })
        .then((data) => data.json())
        .then((res) => setCartProducts(res));
    }
  }, [cartItems]);

  useEffect(() => {
    document.body.style.overflow = isModalCartOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalCartOpen]);

  const openModal = () => dispatch(OPEN_CART_MODAL);
  const closeModal = () => dispatch(CLOSE_CART_MODAL);

  return { cartProducts, cartItems, isModalCartOpen, openModal, closeModal };
};
