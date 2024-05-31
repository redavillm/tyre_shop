export const selectTyresList = (state) => state.tyresState.tyresList || [];

export const selectTyreById = (state) => state.tyresState.tyreById;

export const selectIsTyresByParams = (state) => state.tyresState.isByParams;

export const selectIsWinter = (state) => state.tyresState.isWinter;

export const selectTyresOptions = (state) => state.tyresState.searchOptions;
