import { ACCUMULATORS } from "../../../../db/ACCUMULATORS";
import { getUniqArr } from "../../../../scripts";

export const sizeOptionCombiner = () => {
  const sizeOptionArrNotSorted = [];
  const sizeOptionArrResult = [];

  ACCUMULATORS.map((el) => {
    const arrParams = [el.length, el.width, el.height];
    return sizeOptionArrNotSorted.push(arrParams);
  });

  sizeOptionArrNotSorted
    .sort()
    .map((el) =>
      sizeOptionArrResult.push(
        String(el[0]) + "x" + String(el[1]) + "x" + String(el[2])
      )
    );
  return getUniqArr(sizeOptionArrResult);
};
export const polarityOptionCreator = () => {
  const polarityOptions = [];

  ACCUMULATORS.map((el) => polarityOptions.push(el.polarity));
  return getUniqArr(polarityOptions.sort());
};
export const capacityOptionCreator = () => {
  const capacityOptions = [];

  ACCUMULATORS.map((el) => capacityOptions.push(Number(el.capacity)));
  return getUniqArr(capacityOptions).sort();
};
export const brandOptionCreator = () => {
  const brandOptions = [];

  ACCUMULATORS.map((el) => brandOptions.push(el.brand));
  return getUniqArr(brandOptions.sort());
};
