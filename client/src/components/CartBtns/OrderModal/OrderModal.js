import { useRef, useState } from "react";
import { StyledOrderButton, StyledOrderWrapper } from "./StyledOrderModal";
import {
  emailChangesScheme,
  nameChangeScheme,
  phoneChangesScheme,
  validateAndGetErrorMessage,
} from "./schemes";
import { useSendOrder } from "../../../hooks/useSendOrder";
import { useCart } from "../CartModal/useCart";
import { useDispatch, useSelector } from "react-redux";
import { selectToastMessage } from "../../../store/selectors/mainSelector";
import { Toast } from "../../Toast/Toast";
import {
  SET_DEFAULT_TOAST_MESSAGE,
  SET_TOAST_MESSAGE,
} from "../../../store/actions";

export const OrderModal = ({ closeModal, onChangeIsOrderFalse }) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toastMessage = useSelector(selectToastMessage);
  const dispatch = useDispatch();

  const sendOrder = useSendOrder();
  const submitButtonRef = useRef(null);
  const { cartProducts } = useCart();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await sendOrder({
        clientName,
        clientEmail,
        clientPhoneNumber,
        cartProducts,
      });
      dispatch(SET_TOAST_MESSAGE("Заказ успешно оформлен!"));

      setTimeout(() => {
        closeModal();
        onChangeIsOrderFalse();
      }, 1000);
    } catch (error) {
      alert("При оформление возникла ошибка!");
    } finally {
      setIsLoading(false);
    }
  };

  const onNameChange = ({ target }) => {
    setClientName(target.value);

    const error = validateAndGetErrorMessage(nameChangeScheme, target.value);

    setNameError(error);
  };
  const onEmailChange = ({ target }) => {
    setClientEmail(target.value);

    const error = validateAndGetErrorMessage(emailChangesScheme, target.value);

    setEmailError(error);
  };
  const onPhoneChange = ({ target }) => {
    setClientPhoneNumber(target.value);

    const error = validateAndGetErrorMessage(phoneChangesScheme, target.value);

    setPhoneError(error);
  };

  return (
    <>
      <StyledOrderWrapper>
        <h3>
          Заполните пожалуйста данные для обратной связи, мы свяжемся с вами в
          ближайшее время.
        </h3>
        <form onSubmit={onSubmit}>
          <div style={{ marginTop: "20px" }}>Имя: </div>
          <input
            type="text"
            name="text"
            value={clientName}
            onChange={onNameChange}
          />
          <div style={{ marginTop: "20px" }}>Почта: </div>
          <input
            type="email"
            name="email"
            value={clientEmail}
            onChange={onEmailChange}
          />
          <div style={{ marginTop: "20px" }}>Номер телефона: </div>
          <input
            type="phone"
            value={clientPhoneNumber}
            onChange={onPhoneChange}
          />
          <br></br>
          <StyledOrderButton
            ref={submitButtonRef}
            className="button"
            type="submit"
            disabled={
              clientName === "" ||
              clientEmail === "" ||
              clientPhoneNumber === "" ||
              phoneError !== null ||
              nameError !== null ||
              emailError !== null
            }
          >
            {isLoading ? "Отправка..." : "Отправить"}
          </StyledOrderButton>
        </form>
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        {phoneError && <div style={{ color: "red" }}>{phoneError}</div>}
        {nameError && <div style={{ color: "red" }}>{nameError}</div>}
      </StyledOrderWrapper>
      {toastMessage && (
        <Toast
          message={toastMessage}
          duration={3000}
          onClose={() => dispatch(SET_DEFAULT_TOAST_MESSAGE())}
        />
      )}
    </>
  );
};
