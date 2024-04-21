import { ACCUMULATORS } from "../db/ACCUMULATORS";
import { DISKS } from "../db/DISKS";
import { TYRES } from "../db/TYRES";

const fetchItem = (items, id) => items.find((el) => el.id === id);

export const fetchTyre = (id) => fetchItem(TYRES, id);

export const fetchDisk = (id) => fetchItem(DISKS, id);

export const fetchAccumulator = (id) => fetchItem(ACCUMULATORS, id);
