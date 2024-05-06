import styled from "styled-components";
import { fetchTyre } from "../../../../scripts/fetchProduct";

const StyledCartImg = styled.img`
  width: 120px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled.button`
  max-height: 40px;
`;

export const CartListItem = ({ id, count, setCartItems }) => {
  const { brand, model, size, price, imgSrc } = fetchTyre(id);
  const { width, radius, height } = size;

  const deletProductFromCart = (id) => {};
  return (
    <Flex>
      <Flex>
        <StyledCartImg src={imgSrc} />
        <div>
          <h6>{brand + " " + model}</h6>
          <p>Параметры: {width + "x" + radius + "x" + height}</p>
          <p>Цена за единицу: {price}</p>
          <p>Стоисость: {price * count}</p>
        </div>
      </Flex>
      <StyledButton onClick={deletProductFromCart(id)}>Удалить</StyledButton>
    </Flex>
  );
};
