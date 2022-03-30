import Categories from "../../Copmonents/Categories/Categories";
import { useFilterContext } from "../../context/FilterContext";
import FilterPrice from "../../Copmonents/FilterPrice";
const Products = () => {
  const { filteredProducts } = useFilterContext();

  return (
    <div>
      <Categories className="" />
      <FilterPrice />
      {filteredProducts.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default Products;
