import { ACCUMULATORS } from "../db/ACCUMULATORS";
import { DISKS } from "../db/DISKS";

export const findProductById = (id) => {
  try {
    // Поиск товара в базе данных аккумуляторов
    const accumulatorProduct = ACCUMULATORS.find(
      (product) => product.id === id
    );
    if (accumulatorProduct) {
      return accumulatorProduct;
    }

    // Поиск товара в базе данных дисков
    const diskProduct = DISKS.find((product) => product.id === id);
    if (diskProduct) {
      return diskProduct;
    }
  } catch (error) {
    console.log(error.message);
  }
};
