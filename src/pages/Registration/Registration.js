import styled from "styled-components";

const StyledRegistration = styled.div`
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    & input {
      all: unset;
      padding: 5px 10px;
      margin-top: 20px;
      width: 400px;
      border: 1px solid black;
      background-color: #aec670;
      font-size: 18px;
      box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    }
    & button {
      position: relative;
      all: unset;
      font-size: 18px;
      background-color: #aec670;
      margin-top: 20px;
      padding: 5px 30px;
      box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);

      &:hover {
        background: #aec09a;
      }
      &:active {
        color: black;
    }
  }
`;

export const Registration = () => {
  return (
    <StyledRegistration>
      <h7>Регистрация</h7>
      <div>
        <form>
          <input type="text" placeholder="Логин..." />
          <input type="email" placeholder="Почта..." />
          <input type="password" placeholder="Пароль..." />
          <input type="password" placeholder="Пароль еще раз..." />
          <button>Войти</button>
        </form>
      </div>
    </StyledRegistration>
  );
};
