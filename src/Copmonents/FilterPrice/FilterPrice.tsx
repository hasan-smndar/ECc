import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import style from "./FilterPrice.module.css";
const FilterPrice = () => {
  const { maxPrice, updateMaxPrice } = useFilterContext();
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMaxPrice(e.target.value);
  };
  return (
    <div className={style.container}>
      <h2 className={style.title}>Price:</h2>
      <div className={style.select}>
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
    </div>
  );
};

export default FilterPrice;
