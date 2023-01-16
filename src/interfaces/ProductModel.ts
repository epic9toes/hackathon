import { ProductAttrib } from "./ProductAttrib";

export interface ProductModel {
  id: string;
  name: string;
  attributes: ProductAttrib[];
  titleAttribute?: string;
}
