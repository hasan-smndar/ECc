import React, { useState } from "react";
import style from "./RangePrices.module.css";
const RangePrices = () => {
  const [value, setValue] = useState("150");
  return (
    <div className={style.range}>
      <input
        type="range"
        value={value}
        min="60"
        max="150"
        onChange={(e) => setValue(e.target.value)}
      />
      <output>{value}</output>
    </div>
  );
};

export default RangePrices;
