import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineHome,
} from "react-icons/ai";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: "products",
    text: "products",
    icon: <MdProductionQuantityLimits />,
  },
  {
    id: 3,
    url: "about",
    text: "about",
    icon: <FiUsers />,
  },
  {
    id: 4,
    url: "blog",
    text: "blog",
    icon: <FiUsers />,
  },
];
export const cart_login = [
  {
    id: 5,
    url: "cart",
    text: "cart",
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 6,
    url: "login",
    text: "login",
    icon: <AiOutlineLogin />,
  },
];
