import clsx from "clsx";
import style from "./Drawer.module.css";
import { AiOutlineLeft } from "react-icons/ai";
import NavigationLink from "../NavigationLink";
import IconButton from "../../IconButton";
import { links, cart_login } from "../data";
type Props = {
  isOpen?: boolean;
  close?: () => void;
};
const Drawer = ({ isOpen, close }: Props) => {
  return (
    <div
      // tabIndex={-1}
      className={clsx(style.container_drawer, { [style.active]: isOpen })}
    >
      <div className={clsx(style.drawer, { [style.acitve_drawer]: isOpen })}>
        <header className={style.header}>
          {/* logo */}
          <h2 style={{ color: "black", fontWeight: "500" }}>Logo</h2>
          <IconButton onClick={close} tabIndex={isOpen ? 0 : -1}>
            <AiOutlineLeft />
          </IconButton>
        </header>
        <ul className={clsx(style.links)}>
          {[...links, ...cart_login].map((link, index) => {
            return (
              <NavigationLink
                onClick={close}
                key={link.id}
                href={link.url}
                leftIcon={link.icon}
                className={clsx(style.link, { [style.animation]: isOpen })}
                style={{ animationDelay: `${(index + 1) * 0.02}s` }}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.text}
              </NavigationLink>
            );
          })}
        </ul>
      </div>
      <div className={style.out} onClick={close}></div>
    </div>
  );
};
export default Drawer;
