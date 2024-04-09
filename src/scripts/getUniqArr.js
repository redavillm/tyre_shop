export const getUniqArr = (arr) => {
  const uniqArr = [];

  for (let el of arr) {
    if (!uniqArr.includes(el)) {
      uniqArr.push(el);
    }
  }
  return uniqArr;
};
