export const selectAccumulatorsList = (state) =>
  state.accumulatorsState.accumulatorsList;

export const selectAccumulatorsFilteredList = (state) =>
  state.accumulatorsState.filtredList;

export const selectAccumulatorById = (state) =>
  state.accumulatorsState.accumulatorById;

export const selectIsAccumulatorsByParams = (state) =>
  state.accumulatorsState.isByParams;

export const selectAccumulatorsOptions = (state) =>
  state.accumulatorsState.searchOptions;
export const selectIsAccumulatorsFilter = (state) =>
  state.accumulatorsState.isFilter;
