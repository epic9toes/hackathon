import { ProductModel } from "../../interfaces/ProductModel";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_ATTRIBUTE,
  ADD_ITEM,
  CHANGE_CATEGORY_NAME,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_ATTRIBUTE,
  REMOVE_ITEM,
  UPDATE_CATEGORY_ATTRIBUTE,
  UPDATE_CATEGORY_TITLE_ATTRIBUTE,
  UPDATE_ITEM,
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

    case UPDATE_CATEGORY_TITLE_ATTRIBUTE:
      const change_items = [...state.categories];
      const changeIdex = change_items.findIndex(
        (x) => x.id === action.payload.id
      );
      if (changeIdex !== -1) {
        change_items[changeIdex].titleAttribute = action.payload.attribute;
      }
      return { ...state, categories: change_items };

    case UPDATE_CATEGORY_ATTRIBUTE:
      const update_categories = [...state.categories];
      const idx = update_categories.findIndex(
        (x) => x.id === action.payload.id
      );
      if (idx !== -1) {
        update_categories[idx].attributes[action.payload.index].name =
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

    case ADD_ITEM:
      const item_categories = [...state.categories];
      const item_idx = item_categories.findIndex(
        (x) => x.id === action.payload.id
      );
      if (item_idx !== -1) {
        item_categories[item_idx].items.push(action.payload.item);
      }
      return { ...state, categories: item_categories };

    case REMOVE_ITEM:
      let items_ = [...state.categories];
      const _item_idx = items_.findIndex((x) => x.id === action.payload.id);
      if (_item_idx !== -1) {
        items_[_item_idx].items.splice(action.payload.index, 1);
      }
      return { ...state, categories: items_ };

    case UPDATE_ITEM:
      const update_item_categories = [...state.categories];
      const update_item_idx = update_item_categories.findIndex(
        (x) => x.id === action.payload.id
      );
      if (update_item_idx !== -1) {
        update_item_categories[update_item_idx].items[action.payload.itemIdx][
          action.payload.key
        ] = action.payload.value;
      }
      return { ...state, categories: update_item_categories };

    default:
      return state;
  }
};

export default categoryReducer;
