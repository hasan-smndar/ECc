import clsx from "clsx";
import { useState } from "react";
import style from "./Navigation.module.css";
import AppBar from "./AppBar";
import NavigationLink from "./NavigationLink";
import IconButton from "../IconButton";
import Drawer from "./Drawer";
import { links, cart_login } from "./data";
import { AiOutlineBars } from "react-icons/ai";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  return (
    <>
      <AppBar>
        <div>
          <h2>logo</h2>
        </div>
        <ul className={clsx(style.hidden, style.links)}>
          {links.map((link) => {
            return (
              <NavigationLink
                key={link.id}
                href={link.url}
                className={clsx(style.link_color, style.link)}
              >
                {link.text}
              </NavigationLink>
            );
          })}
        </ul>
        <ul className={clsx(style.hidden, style.cart_login)}>
          {cart_login.map((link) => {
            return (
              <NavigationLink
                key={link.id}
                href={link.url}
                className={clsx(style.link_color, style.icon)}
              >
                {link.icon}
              </NavigationLink>
            );
          })}
        </ul>
        <IconButton className={style.bar_button} onClick={open}>
          <AiOutlineBars />
        </IconButton>
      </AppBar>
      <Drawer close={close} isOpen={isOpen} />
    </>
  );
};

export default Navigation;
