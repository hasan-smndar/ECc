import React, { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";
import { useProductsContext } from "./ProductsContext";
import { Product } from "./Type";
import { FilterAction } from "../actions/Filter";
type Context = {
  filteredProducts: Product[];
  isLoading: boolean;
  updateCategory: (category: string) => void;
  updateMaxPrice: (maxPrice: string) => void;
  maxPrice: number;
};
export const FilterContext = createContext<Context>({} as Context);
const initialState = {
  maxPrice: 300,
  filteredProducts: [],
  products: [],
  sort: "low",
  category: "all",
};
const FilterProvider: React.FC = ({ children }) => {
  const { products, isLoading } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  useEffect(() => {
    if (!isLoading) {
      dispatch({ type: FilterAction.SET_PRODUCTS, payload: products });
    }
  }, [isLoading, products]);
  const { filteredProducts, maxPrice } = state;
  const updateCategory = (category: string) => {
    dispatch({ type: FilterAction.SET_CATEGORY, payload: category });
    dispatch({ type: FilterAction.UPDATE_FILTER });
  };
  const updateMaxPrice = (maxPrice: string) => {
    dispatch({ type: FilterAction.SET_MAX_PRICE, payload: maxPrice });
    dispatch({ type: FilterAction.UPDATE_FILTER });
  };
  return (
    <FilterContext.Provider
      value={{
        filteredProducts,
        isLoading,
        updateCategory,
        updateMaxPrice,
        maxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
export default FilterProvider;
