import styled from "styled-components";

const StyledAuthPage = styled.div`
  margin-top: 18%;
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
      width: 200px;
      border: 1px solid black;
      background-color: #aec670;
      font-size: 18px;
      box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    }
    & button {
      all: unset;
      font-size: 18px;
      background-color: #aec670;
      margin-top: 20px;
      padding: 5px 30px;
      box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    }
  }
`;

export const AuthPage = () => {
  return (
    <StyledAuthPage>
      <h7>Введте логин и пароль</h7>
      <div>
        <form>
          <input type="text" />
          <input type="password" />
          <button>Войти</button>
        </form>
      </div>
    </StyledAuthPage>
  );
};
