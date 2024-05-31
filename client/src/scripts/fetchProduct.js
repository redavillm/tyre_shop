import { ACCUMULATORS } from "../db/ACCUMULATORS";
import { DISKS } from "../db/DISKS";

const fetchItem = (items, id) => items.find((el) => el.id === id);

export const fetchDisk = (id) => fetchItem(DISKS, id);

export const fetchAccumulator = (id) => fetchItem(ACCUMULATORS, id);
