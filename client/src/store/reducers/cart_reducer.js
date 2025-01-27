import { CART_ACTIONS } from "../store_const";

const initialCartState = {
  items: [],
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id, type, count } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...state.items[existingItemIndex],
          count: state.items[existingItemIndex].count + count,
        };

        return {
          ...state,
          items: [
            ...state.items.slice(0, existingItemIndex),
            updatedItem,
            ...state.items.slice(existingItemIndex + 1),
          ],
        };
      }

      return {
        ...state,
        items: [...state.items, { id, type, count }],
      };
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case CART_ACTIONS.UPDATE_CART_ITEM: {
      const { id, count } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex === -1) {
        return state;
      }

      const updatedItem = { ...state.items[existingItemIndex], count };

      return {
        ...state,
        items: [
          ...state.items.slice(0, existingItemIndex),
          updatedItem,
          ...state.items.slice(existingItemIndex + 1),
        ],
      };
    }
    case CART_ACTIONS.RESET_CART:
      return (state = initialCartState);

    default:
      return state;
  }
};
