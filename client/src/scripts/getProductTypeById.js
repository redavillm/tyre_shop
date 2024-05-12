import { ACCUMULATORS } from "../db/ACCUMULATORS";
import { DISKS } from "../db/DISKS";
import { TYRES } from "../db/TYRES";

export const getProductTypeById = (id) => {
  try {
    // Поиск товара в базе данных шин
    const tyreProduct = TYRES.find((product) => product.id === id);
    if (tyreProduct) {
      return "tyre";
    }
    // Поиск товара в базе данных дисков
    const diskProduct = DISKS.find((product) => product.id === id);
    if (diskProduct) {
      return "disk";
    }

    // Поиск товара в базе данных аккумуляторов
    const accumulatorProduct = ACCUMULATORS.find(
      (product) => product.id === id
    );
    if (accumulatorProduct) {
      return "accumulator";
    }
  } catch (error) {
    console.log(error.message);
  }
};
