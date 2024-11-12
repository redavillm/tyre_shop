import { Flex, FlexCenter } from "../Styles/mainStyeles";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_CART_MODAL, OPEN_CART_MODAL } from "../../store/actions/changes";
import Modal from "react-modal";
import styled from "styled-components";
import {
  selectCartItems,
  selectIsModalCartOpen,
} from "../../store/selectors/mainSelector";
import { CartListItem } from "./CartListItem";
import { useEffect, useState } from "react";

Modal.setAppElement("#root");

const StyledCartList = styled.div`
  margin: 20px auto;
  border-bottom: 2px solid white;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const CartBtn = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const cartItems = useSelector(selectCartItems);
  const isModalCartOpen = useSelector(selectIsModalCartOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((data) => data.json())
      .then((res) => setCartProducts(res));
  }, [cartItems]);

  const openModal = () => dispatch(OPEN_CART_MODAL);
  const closeModal = () => dispatch(CLOSE_CART_MODAL);

  const totalPrice = (items, products) => {
    return items.reduce((total, item) => {
      const product = products.find((el) => el._id === item.id);
      if (product) {
        total += product.price * item.count;
      }

      return total;
    }, 0);
  };

  return (
    <>
      <FlexCenter>
        <i
          className="fa fa-shopping-cart"
          aria-hidden="true"
          onClick={openModal}
        />
        {cartItems.length > 0 && (
          <span
            className="cart-count"
            style={{
              top: "-5px",
              right: "-10px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              padding: "5px",
              fontSize: "12px",
            }}
          >
            {cartItems.length}
          </span>
        )}
      </FlexCenter>

      <Modal
        style={customStyles}
        isOpen={isModalCartOpen}
        onRequestClose={closeModal}
      >
        <h2> Корзина </h2>
        <StyledCartList>
          {cartProducts.length === 0 ? (
            <div>Идет загрузка...</div>
          ) : (
            cartItems.map((item) => (
              <CartListItem
                key={item.id}
                type={item.type}
                count={item.count}
                item={cartProducts?.find((el) => el._id === item.id)}
              />
            ))
          )}
        </StyledCartList>

        <p>Итоговая цена: {totalPrice(cartItems, cartProducts)} руб.</p>

        <button>Оформить</button>
      </Modal>
    </>
  );
};
