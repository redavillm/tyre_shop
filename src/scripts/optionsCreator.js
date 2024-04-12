export const optionsCreator = (field, arr) => {
  return [...new Set(arr.map((el) => el[field]))].sort();
};
