import { totalPrice } from "../../utilities/calculateTotalPrice";
import { CartListItem } from "./CartListItem";
import {
  StyledCart,
  StyledCartContent,
  StyledCartFooter,
  StyledCartHeader,
} from "./StyledCart";
import { useCart } from "./useCart";

export const ModalCart = () => {
  const { cartProducts, cartItems, closeModal } = useCart();
  return (
    <StyledCart>
      <StyledCartHeader>
        <h2> Корзина </h2>
        <i
          class="fa fa-times"
          aria-hidden="true"
          onClick={closeModal}
          style={{ cursor: "pointer" }}
        />
      </StyledCartHeader>
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

        <button>Оформить</button>
      </StyledCartFooter>
    </StyledCart>
  );
};
