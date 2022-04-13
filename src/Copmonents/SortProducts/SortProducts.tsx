import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import style from "./SortProducts.module.css";
const option = [
  {
    id: 1,
    label: "last",
    value: "last",
  },
  {
    id: 2,
    label: "low (price)",
    value: "low_price",
  },
  {
    id: 3,
    label: "height (price)",
    value: "height_price",
  },
];
const SortProducts = () => {
  const { sort, updateSort } = useFilterContext();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSort(e.target.value);
  };
  return (
    <div className={style.container}>
      <h2 className={style.title}>sort by:</h2>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(e) => handleSelect(e)}
      >
        {option.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortProducts;
