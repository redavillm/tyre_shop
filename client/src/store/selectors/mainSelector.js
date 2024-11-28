export const selectIsLoading = (state) => state.seterState.isLoading;

export const selectIsError = (state) => state.seterState.isError;

export const selectIsModalCartOpen = (state) =>
  state.seterState.isModalCartOpen;

export const selectCartItems = (state) => state.cartState.items || [];
