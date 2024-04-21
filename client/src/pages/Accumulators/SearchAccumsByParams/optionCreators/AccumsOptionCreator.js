import { ACCUMULATORS } from "../../../../db/ACCUMULATORS";

export const sizeOptionCombiner = () => {
  const sizeOptionArrResult = ACCUMULATORS.reduce((acc, el) => {
    const arrParams = [el.length, el.width, el.height];
    const str = arrParams.join("x");
    if (!acc.includes(str)) {
      acc.push(str);
    }
    return acc;
  }, []);

  return sizeOptionArrResult;
};

export const AccumsOptionCreator = (field, arr, type = "string") => {
  const options = arr.map((el) =>
    type === "number" ? Number(el[field]) : el[field]
  );
  const uniqueOptions = [...new Set(options)];
  return type === "number"
    ? uniqueOptions.sort((a, b) => a - b)
    : uniqueOptions.sort();
};
