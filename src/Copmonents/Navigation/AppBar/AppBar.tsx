import Container from "../../Container";
import style from "./AppBar.module.css";
const AppBar: React.FC = ({ children }) => {
  return (
    <nav className={style.nav}>
      <Container>
        <div className={style.bar}>{children}</div>
      </Container>
    </nav>
  );
};

export default AppBar;
