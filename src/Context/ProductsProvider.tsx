import { Category } from "@chec/commerce.js/types/category";
import React, { useState } from "react";
import { commerce } from "../lib/commerce";
export const Context = React.createContext({});
const ProductsProvider: React.FC = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default ProductsProvider;
