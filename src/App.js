import styled from "styled-components";
import { Header, TyrePage, Footer, DiskPage } from "./components/index";
import { Route, Routes } from "react-router-dom";
import { AccumulatorsPage } from "./components/accumulatorsPage/accumulatorsPage";
import { ContactsPage } from "./components/Contacts/Contacts";
import { AuthPage } from "./components/authPage/authPage";

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
        <Routes>
          <Route path="/" element={<TyrePage />} />
          <Route path="/disks" element={<DiskPage />} />
          <Route path="/accumulators" element={<AccumulatorsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Content>
      <Footer />
    </StyledContainer>
  );
};

export default AppContainer;
