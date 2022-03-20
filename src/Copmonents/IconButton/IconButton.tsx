import React from "react";
import style from "./IconButton.module.css";
import clsx from "clsx";
type Props = {
  children: React.ReactNode;
  onClick?: React.ReactEventHandler;
  className?: string;
  tabIndex?: number;
};
const IconButton = ({ children, onClick, className, tabIndex }: Props) => {
  return (
    <button
      className={clsx(style.icon_button, className)}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};

export default IconButton;
