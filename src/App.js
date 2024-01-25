import styled from "styled-components";
import { Header } from "./components/header/header";

const StyledContainer = styled.div`
  margin: 0px auto;
  font-size: calc(10px + 2vmin);
  color: white;
  max-width: 1400px;
`;

const AppContainer = () => {
  return (
    <StyledContainer>
      <Header />
    </StyledContainer>
  );
};

export default AppContainer;
