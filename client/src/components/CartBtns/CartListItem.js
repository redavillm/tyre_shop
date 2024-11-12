import { useDispatch } from "react-redux";
import styled from "styled-components";
import { REMOVE_FROM_CART } from "../../store/actions/cartActions";

const StyledCartImg = styled.img`
  width: 120px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDelButton = styled.button`
  max-height: 40px;
`;

export const CartListItem = (props) => {
  const { key, item, count, type } = props;
  const { imgSrc, brand, model, price } = item;
  const dispatch = useDispatch();

  const handleDeleteItemFormCart = (id) => {
    dispatch(REMOVE_FROM_CART(id));
  };

  return (
    <Flex>
      <Flex>
        <StyledCartImg src={imgSrc} />
        <div>
          <h4>{brand + " " + model}</h4>
          <p>Тип: {type}</p>
          <p>Количество в заказе: {count}</p>
          <p>Цена за единицу: {price} руб.</p>
          <p>Стоисость: {price * count} руб.</p>
        </div>
      </Flex>
      <StyledDelButton onClick={() => handleDeleteItemFormCart(key)}>
        Удалить
      </StyledDelButton>
    </Flex>
  );
};
