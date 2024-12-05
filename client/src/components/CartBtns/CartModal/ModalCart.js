import { totalPrice } from "../../../utilities/calculateTotalPrice";
import { CartListItem } from "./CartListItem";
import {
  StyledCart,
  StyledCartContent,
  StyledCartFooter,
  StyledModalHeader,
} from "../StyledCart";
import { useCart } from "./useCart";

export const ModalCart = ({ isOrder, setIsOrder }) => {
  const { cartProducts, cartItems, closeModal } = useCart();

  const handlSubmit = () => {
    setIsOrder(!isOrder);
  };

  return (
    <StyledCart>
      <StyledModalHeader>
        <h2> Корзина </h2>
      </StyledModalHeader>
      <StyledCartContent>
        {cartItems.length <= 0 ? (
          <div>Корзина пока что пуста</div>
        ) : (
          cartItems.map((item) => (
            <CartListItem
              closeModal={closeModal}
              key={item.id}
              id={item.id}
              type={item.type}
              count={item.count}
              item={cartProducts?.find((el) => el._id === item.id)}
            />
          ))
        )}
      </StyledCartContent>
      <StyledCartFooter>
        <p>Итоговая цена: {totalPrice(cartItems, cartProducts)} руб.</p>

        <button disabled={cartItems.length === 0} onClick={handlSubmit}>
          Оформить
        </button>
      </StyledCartFooter>
    </StyledCart>
  );
};
