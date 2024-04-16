import { ACCUMULATORS } from "../db/ACCUMULATORS";
import { DISKS } from "../db/DISKS";
import { TYRES } from "../db/TYRES";

export const fetchTyre = (id) => {
  return TYRES.find((el) => el.id === id);
};

export const fetchDisk = (id) => {
  return DISKS.find((el) => el.id === id);
};

export const fetchAccumulator = (id) => {
  return ACCUMULATORS.find((el) => el.id === id);
};
