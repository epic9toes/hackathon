import { ProductAttrib } from "../../interfaces/ProductAttrib";
import { ProductModel } from "../../interfaces/ProductModel";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_ATTRIBUTE,
  ADD_ITEM,
  CHANGE_CATEGORY_NAME,
  GET_CATEGORY,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_ATTRIBUTE,
  REMOVE_ITEM,
  UPDATE_CATEGORY_ATTRIBUTE,
  UPDATE_CATEGORY_TITLE_ATTRIBUTE,
  UPDATE_ITEM,
} from "./categoryTypes";

export const addCategory = (category: ProductModel) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};

export const getCategory = (id: string) => {
  return {
    type: GET_CATEGORY,
    payload: id,
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

export const changeCategoryTitleAttribute = (attribute: string, id: string) => {
  return {
    type: UPDATE_CATEGORY_TITLE_ATTRIBUTE,
    payload: { attribute, id },
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

export const addItem = (id: string, item: any) => {
  return {
    type: ADD_ITEM,
    payload: { id, item },
  };
};

export const removeItem = (id: string, index: number) => {
  return {
    type: REMOVE_ITEM,
    payload: { id, index },
  };
};

export const updateItem = (
  id: string,
  key: string,
  value: any,
  itemIdx: number
) => {
  return {
    type: UPDATE_ITEM,
    payload: { id, key, value, itemIdx },
  };
};
