import { Product } from "@chec/commerce.js/types/product";

export type ProductsData = {
  products: Array<Product>;
  isLoading: boolean;
};
export type ContextType = {
  productsData: ProductsData;
  setCategorySlug: React.Dispatch<React.SetStateAction<CategorySlugType>>;
  categorySlug: CategorySlugType;
};
export type CategorySlugType = {
  primary: string;
  secondary: string;
};
