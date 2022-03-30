import { Product } from "../context/Type";
import { FilterAction } from "../actions/Filter";
type Action = {
  type: FilterAction;
  payload?: any;
};
type State = {
  maxPrice: number;
  sort: string;
  category: string;
  filteredProducts: Product[];
  products: Product[];
};
export const filterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FilterAction.SET_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };
    case FilterAction.SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
    case FilterAction.SET_MAX_PRICE: {
      return {
        ...state,
        maxPrice: action.payload,
      };
    }
    case FilterAction.UPDATE_FILTER: {
      let filtered = state.products;
      if (state.category !== "all") {
        filtered = filtered.filter((product) => {
          return product.categories.includes(state.category);
        });
      }
      filtered = filtered.filter((product) => {
        return product.price <= state.maxPrice;
      });
      return { ...state, filteredProducts: filtered };
    }

    default:
      return state;
  }
};
