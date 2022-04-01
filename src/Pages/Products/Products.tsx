import Categories from "../../Copmonents/Categories/Categories";
import { useFilterContext } from "../../context/FilterContext";
import FilterPrice from "../../Copmonents/FilterPrice";
import SortProducts from "../../Copmonents/SortProducts/SortProducts";
const Products = () => {
  const { filteredProducts } = useFilterContext();

  return (
    <div>
      <Categories className="" />
      <FilterPrice />
      <SortProducts />
      {filteredProducts.map((product) => {
        return (
          <div key={product.id}>
            {product.name} {product.price}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
