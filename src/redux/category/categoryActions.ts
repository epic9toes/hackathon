import { ProductAttrib } from "../../interfaces/ProductAttrib";
import { ProductModel } from "../../interfaces/ProductModel";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_ATTRIBUTE,
  CHANGE_CATEGORY_NAME,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_ATTRIBUTE,
  UPDATE_CATEGORY_ATTRIBUTE,
} from "./categoryTypes";

export const addCategory = (category: ProductModel) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};

export const removeCategory = (index: number) => {
  return {
    type: REMOVE_CATEGORY,
    payload: index,
  };
};

export const changeCategoryName = (name: string, id: string) => {
  return {
    type: CHANGE_CATEGORY_NAME,
    payload: { name, id },
  };
};

export const updateCategoryAttribute = (
  name: string,
  id: string,
  index: number
) => {
  return {
    type: UPDATE_CATEGORY_ATTRIBUTE,
    payload: { name, id, index },
  };
};

export const removeCategoryAttribute = (id: string, index: number) => {
  return {
    type: REMOVE_CATEGORY_ATTRIBUTE,
    payload: { id, index },
  };
};

export const addCategoryAttribute = (id: string, item: ProductAttrib) => {
  return {
    type: ADD_CATEGORY_ATTRIBUTE,
    payload: { id, item },
  };
};
