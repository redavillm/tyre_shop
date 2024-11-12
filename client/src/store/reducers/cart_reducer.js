import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "../actions";

const initialCartState = {
  items: [],
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, type, count } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      console.log("state => ", state);
      console.log("existingItem => ", existingItem);
      return existingItem
        ? {
            ...state,
            items: state.items.map((item) =>
              item.id === id ? { ...item, count: item.count + count } : item
            ),
          }
        : {
            ...state,
            items: [...state.items, { id, type, count }],
          };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: [state.items.filter((items) => items.id !== action.payload)],
      };
    }
    case UPDATE_CART_ITEM: {
      const { id, count } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, count } : item
        ),
      };
    }

    default:
      return state;
  }
};
