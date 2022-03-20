import { NavLink } from "react-router-dom";
import clsx from "clsx";
type Props = {
  children: React.ReactNode;
  href: string;
  onClick?: React.ReactEventHandler;
  leftIcon?: React.ReactNode;
  className?: string;
  isActiveClass?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
};
const NavigationLink = ({
  children,
  href,
  leftIcon,
  className,
  onClick,
  isActiveClass,
  style,
  tabIndex,
}: Props) => {
  return (
    <NavLink
      to={href}
      tabIndex={tabIndex}
      style={style}
      onClick={onClick}
      className={({ isActive }) => clsx(className, isActive && isActiveClass)}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
    </NavLink>
  );
};

export default NavigationLink;
