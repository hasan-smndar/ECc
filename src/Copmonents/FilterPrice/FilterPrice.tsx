import React, { useState } from "react";
import { useFilterContext } from "../../context/FilterContext";
import style from "./FilterPrice.module.css";
const FilterPrice = () => {
  const { maxPrice, updateMaxPrice } = useFilterContext();
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMaxPrice(e.target.value);
  };
  return (
    <div className={style.container}>
      <input
        className={style.filter}
        type="range"
        min="1"
        max="500"
        value={maxPrice}
        onChange={(e) => handleRange(e)}
      />
      <div className={style.value}>{maxPrice}</div>
    </div>
  );
};

export default FilterPrice;
