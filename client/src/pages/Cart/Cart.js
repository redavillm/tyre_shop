import styled from "styled-components";
import { CartList } from "./CartList/CartList";
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cart = ({ cartItems, setCartItems }) => {
  const cartBacket = [];

  return (
    <div>
      <CartList
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartBacket={cartBacket}
      />
      <Flex>
        <p>Итоговая цена: {cartBacket.reduce((acc, el) => acc + el.price)}</p>
        <button>Оформить</button>
      </Flex>
    </div>
  );
};
