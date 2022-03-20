import style from "./Hero.module.css";
import Container from "../Container";

const Hero = () => {
  return (
    <div className={style.hero}>
      <Container>
        <div className={style.container}>
          <div className={style.text}>
            <h1>Sale 20% Off</h1>
            <h1>On Everything</h1>
            <p>
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
