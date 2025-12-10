import type { PropProduct } from "../types/Product";
import type { PropResumenProduct } from "./ResumenProduct";

export type PropResponse = {
  status: number;
  message: string;
  info: PropProduct[] | PropResumenProduct[];
}