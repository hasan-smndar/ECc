import { useFilterContext } from "../../context/FilterContext";
import FilterSection from "../../Copmonents/FilterSection";
import Title from "../../Copmonents/Title";
import style from "./Products.module.css";
const Products = () => {
  const { filteredProducts } = useFilterContext();

  return (
    <div>
      <Title>Our Proudcts</Title>
      <div className={style.container}>
        <FilterSection />
        <div>
          {filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <div>
                  <img src={product.image} style={{ width: "200px" }} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
