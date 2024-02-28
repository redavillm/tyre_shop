import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/footer/footer";
import { TyrePage } from "./components/tyrePage/TyrePage";

const StyledContainer = styled.div`
  margin: 0px auto;
  font-size: calc(10px + 2vmin);
  color: white;
  max-width: 1400px;
`;

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

const AppContainer = () => {
  return (
    <StyledContainer>
      <Content>
        <Header />
        <Navbar />
        <TyrePage />
      </Content>
      <Footer />
    </StyledContainer>
  );
};

export default AppContainer;