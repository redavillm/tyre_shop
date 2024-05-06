import styled from "styled-components";
import { CartListItem } from "./CartListItem/CartListItem";

const StyledCartList = styled.div`
  margin: 20px auto;
  border-bottom: 3px solid white;
`;

export const CartList = ({ cartItems, setCartItems }) => {
  return (
    <StyledCartList>
      {cartItems.map((el) => (
        <CartListItem
          key={el.id}
          id={el.id}
          count={el.count}
          setCartItems={setCartItems}
        />
      ))}
    </StyledCartList>
  );
};
