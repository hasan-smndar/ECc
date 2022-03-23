import { useContext } from "react";
import { Context } from "./ProductsProvider";
export const useProducts = () => {
  return useContext(Context);
};
