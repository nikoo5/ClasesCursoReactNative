import { CATEGORIES } from "../../data/mock-data";
import { SELECT_CATEGORY } from "../actions/category.actions";

const INITIAL_STATE = {
  list: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_CATEGORY:
      const categoryIndex = state.list.findIndex(cat => cat.id == action.categoryID);
      if(categoryIndex === -1) return { ...state }

      return {
        ...state,
        selected: state.list[categoryIndex]
      }
    default:
      return { ...state };
  }
};

export default CategoryReducer;