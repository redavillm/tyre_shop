import { FlexCenter } from "../Styles/mainStyeles";
import Modal from "react-modal";
import { ModalCart } from "./ModalCart";
import { useCart } from "./useCart";
import { BaseModal } from "../BaseModal/BaseModal";

Modal.setAppElement("#root");

export const CartBtn = () => {
  const { openModal, cartItems, isModalCartOpen, closeModal } = useCart();
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
        <ModalCart />
      </BaseModal>
    </>
  );
};
