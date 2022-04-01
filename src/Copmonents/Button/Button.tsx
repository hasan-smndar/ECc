import clsx from "clsx";
import React from "react";
type Props = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};
const Button = ({ className, children, onClick }: Props) => {
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
