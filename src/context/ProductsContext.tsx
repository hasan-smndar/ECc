import React, { createContext, useContext, useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import { Product } from "./Type";
type ProductsContextType = {
  products: Product[];
  isLoading: boolean;
};
const initialProductsContext = {
  products: [],
  isLoading: true,
};
export const ProductsContext = createContext<ProductsContextType>(
  initialProductsContext
);
const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getProducts = async () => {
    const { data } = await commerce.products.list();
    const selected = data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        categories: item.categories.map((item) => item.slug),
        image: item.image?.url,
        price: item.price.raw,
        description: item.description,
      };
    });
    setProducts(selected);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
export default ProductsProvider;
