import React from "react";
import style from "./Title.module.css";
const Title: React.FC = ({ children }) => {
  return (
    <div className={style.title}>
      <h1 className="">{children}</h1>
    </div>
  );
};

export default Title;
