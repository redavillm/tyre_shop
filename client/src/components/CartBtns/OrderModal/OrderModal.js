import { useRef, useState } from "react";
import { StyledOrderButton, StyledOrderWrapper } from "./StyledOrderModal";
import {
  emailChangesScheme,
  nameChangeScheme,
  phoneChangesScheme,
  validateAndGetErrorMessage,
} from "./schemes";

const sendData = (data) => {
  console.log(data);
};

export const OrderModal = ({ closeModal, onChangeIsOrderFalse }) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const submitButtonRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ clientName, clientEmail, clientPhoneNumber });
    onChangeIsOrderFalse();
    closeModal();
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
        <div style={{ marginTop: "20px" }}>Номре телеофна: </div>
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
          Отправить
        </StyledOrderButton>
      </form>
      {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      {phoneError && <div style={{ color: "red" }}>{phoneError}</div>}
      {nameError && <div style={{ color: "red" }}>{nameError}</div>}
    </StyledOrderWrapper>
  );
};
