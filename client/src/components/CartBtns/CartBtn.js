import { FlexCenter } from "../Styles/mainStyeles";
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

const StyledCartModal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  & section {
    // margin: 0px auto;
  }
  & button {
    cursor: pointer;
    // display: block;
    // margin: 10px auto;
    padding: 10px 30px;
    border: none;
  }
  & button:hover {
  }
`;

const StyledCartFooter = styled.div`
  position: sticky; /* Фиксирует футер относительно родителя */
  bottom: 0; /* Располагает его внизу */
  background: #f9f9f9; /* Светлый фон для визуального выделения */
  padding: 10px;
  border-top: 1px solid #ddd; /* Разделительная линия сверху */
  z-index: 1; /* Чтобы футер всегда был над содержимым */
`;

const StyledCartContent = styled.section`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
`;

const customStyles = {
  content: {
    width: "900px",
    height: "600px",
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
    if (isModalCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalCartOpen]);

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
        <StyledCartModal>
          <h2> Корзина </h2>
          <StyledCartContent>
            {cartItems.length <= 0 ? (
              <div>Корзина пока что пуста</div>
            ) : (
              cartItems.map((item) => (
                <CartListItem
                  key={item.id}
                  id={item.id}
                  type={item.type}
                  count={item.count}
                  item={cartProducts?.find((el) => el._id === item.id)}
                />
              ))
            )}
          </StyledCartContent>
          <StyledCartFooter>
            <p>Итоговая цена: {totalPrice(cartItems, cartProducts)} руб.</p>

            <button>Оформить</button>
          </StyledCartFooter>
        </StyledCartModal>
      </Modal>
    </>
  );
};
