import React from "react";
import SortProducts from "../SortProducts/SortProducts";
import Categories from "../Categories/Categories";
import FilterPrice from "../FilterPrice";
import style from "./FilterSection.module.css";
import Container from "../Container";
const FilterSection = () => {
  return (
    <div className={style.container}>
      <Categories />
      <div>
        <FilterPrice />
        <SortProducts />
      </div>
    </div>
  );
};

export default FilterSection;
