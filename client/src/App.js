import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Tyre,
  Tyres,
  Disk,
  Disks,
  Accumulator,
  Accumulators,
  Contacts,
  Auth,
  Registration,
  NotFound,
  Cart,
} from "./pages";
import { useState } from "react";

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
  const [cartItems, setCartItems] = useState();
  return (
    <StyledContainer>
      <Content>
        <Header />
        <Routes>
          <Route path="/" element={<Tyres setCartItems={setCartItems} />} />
          <Route
            path="/tyres/:id"
            element={<Tyre setCartItems={setCartItems} />}
          />
          <Route
            path="/disks"
            element={<Disks setCartItems={setCartItems} />}
          ></Route>
          <Route
            path="/disks/:id"
            element={<Disk setCartItems={setCartItems} />}
          />
          <Route
            path="/accumulators"
            element={<Accumulators setCartItems={setCartItems} />}
          />
          <Route
            path="/accumulators/:id"
            element={<Accumulator setCartItems={setCartItems} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </Content>
      <Footer />
    </StyledContainer>
  );
};

export default AppContainer;
