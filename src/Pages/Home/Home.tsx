import Hero from "../../Copmonents/Hero";
import Title from "../../Copmonents/Title";
import Card from "../../Copmonents/Card";
import { data } from "./data";
import Container from "../../Copmonents/Container";
import style from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <Title>why shopping here</Title>
        <div className={style.cards}>
          {data.map((card) => {
            return (
              <Card
                key={card.id}
                text={card.text}
                title={card.title}
                icon={card.icon}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Home;
