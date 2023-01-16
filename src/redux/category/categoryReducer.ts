import { ProductModel } from "../../interfaces/ProductModel";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_ATTRIBUTE,
  CHANGE_CATEGORY_NAME,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_ATTRIBUTE,
  UPDATE_CATEGORY_ATTRIBUTE,
} from "./categoryTypes";

const categories: ProductModel[] = [];

const initialState = {
  categories: categories,
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    case REMOVE_CATEGORY:
      let _items = [...state.categories];
      _items.splice(action.payload, 1);
      return { ...state, categories: _items };
    case CHANGE_CATEGORY_NAME:
      let items = [...state.categories];
      const itemIdex = items.findIndex((x) => x.id === action.payload.id);
      if (itemIdex !== -1) {
        items[itemIdex].name = action.payload.name;
      }
      return { ...state, categories: items };

    case UPDATE_CATEGORY_ATTRIBUTE:
      const update_categories = [...state.categories];
      const idx = update_categories.findIndex(
        (x) => x.id === action.payload.id
      );
      if (idx !== -1) {
        update_categories[idx].attributes[action.payload.index] =
          action.payload.name;
      }
      return { ...state, categories: update_categories };

    case REMOVE_CATEGORY_ATTRIBUTE:
      const remove_categories = [...state.categories];
      const r_idx = remove_categories.findIndex(
        (x) => x.id === action.payload.id
      );
      remove_categories[r_idx].attributes.splice(action.payload.index, 1);
      return { ...state, categories: remove_categories };

    case ADD_CATEGORY_ATTRIBUTE:
      const add_categories = [...state.categories];
      const a_idx = add_categories.findIndex((x) => x.id === action.payload.id);
      if (a_idx !== -1) {
        add_categories[a_idx].attributes.push(action.payload.item);
      }
      return { ...state, categories: add_categories };
    default:
      return state;
  }
};

export default categoryReducer;
