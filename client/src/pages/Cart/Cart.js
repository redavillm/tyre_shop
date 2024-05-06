import styled from "styled-components";
import { CartList } from "./CartList/CartList";
import { findProductById } from "../../scripts/findProductById";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cart = ({ cartItems, setCartItems }) => {
  const cartBacket = [];

  cartItems.map((el) => cartBacket.push(findProductById(el.id)));

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
