import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Accumulators } from "./pages/Accumulators/Accumulators";
import { Tyres } from "./pages/Tyres/Tyres";
import { Disks } from "./pages/Disks/Disks";
import { Contacts } from "./pages/Contacts/Contacts";
import { Auth } from "./pages/Auth/Auth";
import { Registration } from "./pages/Registration/Registration";
import { Tyre } from "./pages/Tyre/Tyre";
import { NotFound } from "./pages/NotFound.js/NotFound";
import { Disk } from "./pages/Disk/Disk";
import { Accumulator } from "./pages/Accumulator/Accumulator";

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
          <Route path="/" element={<Tyres />} />
          <Route path="/tyres/:id" element={<Tyre />} />
          <Route path="/disks" element={<Disks />}></Route>
          <Route path="/disks/:id" element={<Disk />} />
          <Route path="/accumulators" element={<Accumulators />} />
          <Route path="/accumulators/:id" element={<Accumulator />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer />
    </StyledContainer>
  );
};

export default AppContainer;
