import clsx from "clsx";
import style from "./Cart.module.css";
type Props = {
  icon?: string;
  title?: string;
  text?: string;
  className?: string;
};
const Card = ({ icon, title, text, className }: Props) => {
  return (
    <>
      <div className={clsx(style.container, className)}>
        <div className={style.icon}>
          <img src={icon} alt={title} />
        </div>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        <div className={style.paragraph}>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
