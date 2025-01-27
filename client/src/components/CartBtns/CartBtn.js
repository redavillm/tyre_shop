import { FlexCenter } from "../Styles/mainStyeles";
import Modal from "react-modal";
import { ModalCart } from "./CartModal/ModalCart";
import { useCart } from "./CartModal/useCart";
import { BaseModal } from "../BaseModal/BaseModal";
import { useState } from "react";
import { OrderModal } from "./OrderModal/OrderModal";
import { StyledCloseModalBtn } from "./StyledCart";
Modal.setAppElement("#root");

export const CartBtn = () => {
  const [isOrder, setIsOrder] = useState(false);
  const { openModal, cartItems, isModalCartOpen, closeModal } = useCart();

  const onChangeIsOrderFalse = () => {
    setIsOrder(false);
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

      <BaseModal isModalCartOpen={isModalCartOpen} closeModal={closeModal}>
        <StyledCloseModalBtn>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              closeModal();
              onChangeIsOrderFalse();
            }}
            style={{ cursor: "pointer" }}
          />
        </StyledCloseModalBtn>

        {isOrder ? (
          <OrderModal
            closeModal={closeModal}
            onChangeIsOrderFalse={onChangeIsOrderFalse}
          />
        ) : (
          <ModalCart isOrder={isOrder} setIsOrder={setIsOrder} />
        )}
      </BaseModal>
    </>
  );
};
