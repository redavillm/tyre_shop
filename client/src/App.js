import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import Modal from "react-modal";
import {
  Tyre,
  Tyres,
  Disk,
  Disks,
  Accumulator,
  Accumulators,
  Contacts,
  Registration,
  NotFound,
} from "./pages";

const StyledContainer = styled.div`
  margin: 0px auto;
  font-size: calc(10px + 2vmin);
  color: white;
  max-width: 1400px;
`;

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

Modal.setAppElement("#root");

const App = () => {
  return (
    <StyledContainer>
      <Content>
        <Header />
        <Routes>
          <Route path="/" element={<Tyres />} />
          <Route path="/tyres/:id" element={<Tyre />} />
          <Route path="/disks" element={<Disks />}></Route>
          <Route path="/disks/:id" element={<Disk />} />
          <Route path="/accumulators" element={<Accumulators />} />
          <Route path="/accumulators/:id" element={<Accumulator />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer />
    </StyledContainer>
  );
};

export default App;
