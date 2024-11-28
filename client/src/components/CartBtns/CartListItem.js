import { useDispatch } from "react-redux";
import styled from "styled-components";
import { REMOVE_FROM_CART } from "../../store/actions/cartActions";

const StyledCartImg = styled.img`
  padding: 20px;
  border: solid black 1px;
  width: 120px;
`;
const Flex = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & button {
    cursor: pointer;
    max-height: 40px;
  }
`;

export const CartListItem = (props) => {
  const dispatch = useDispatch();
  const { id, item, count, type } = props;
  if (!item) {
    return null;
  }

  const { imgSrc, brand, model, price } = item;

  const handleDeleteItemFormCart = (id) => {
    dispatch(REMOVE_FROM_CART(id));
  };

  return (
    <Flex>
      <StyledCartImg src={imgSrc} alt="Item picture" />
      <div>
        <h4>{brand + " " + model}</h4>
        <p>Тип: {type}</p>
        <p>Количество в заказе: {count}</p>
        <p>Цена за единицу: {price} руб.</p>
        <p>Стоисость: {price * count} руб.</p>
      </div>
      <button onClick={() => handleDeleteItemFormCart(id)}>Удалить</button>
    </Flex>
  );
};
