import styles from "./Price.module.css";
import Wrapper from "../UI/Wrapper";
import Line from "../UI/Line";
import Card from "./Card";
const hair = [
  {
    name: "Basic",
    description: "washing, haircut",
    price: 15,
    duration: "20 minutes",
  },
  {
    name: "Comfort",
    description: "washing, haircut, styling",
    price: 17,
    duration: "40 minutes",
  },
  {
    name: "Comfort+",
    description: "washing, haircut, styling, all you can drink, snacks",
    price: 22,
    duration: "40 minutes",
  },
  {
    name: "All in",
    description: "washing, haircut, shaving,  all you can drink, snacks",
    price: 30,
    duration: "60 minutes",
  },
];
const beard = [
  {
    name: "Basic",
    description: "Shaving",
    price: 10,
    duration: "20 minutes",
  },
  {
    name: "Comfort",
    description: "Shaving, all you can drink, snacks",
    price: 15,
    duration: "20 minutes",
  },
  {
    name: "All in",
    description: "Shaving, massage, all you can drink, snacks",
    price: 20,
    duration: "20 minutes",
  },
];
const Price = () => {
  return (
    <div className={styles.priceWrapper}>
      <Wrapper>
        <div className={styles.priceHeader}>
          <Line />
          <h2 className={styles.h2}>Types of haircuts with prices</h2>
          <p className={styles.text}>
            We do not cut according to templates, we have a personal approach to
            each visitor. We make haircuts according to the shape of the head,
            face and hair type.
          </p>
          <button className={styles.reserveBtn}>Make reservation</button>
        </div>
        <h3 className={styles.nameOfCards}>Hair</h3>
        <div className={styles.cards}>
          {hair.map((element, index) => {
            return (
              <Card
                key={index}
                name={element.name}
                description={element.description}
                price={element.price}
                duration={element.duration}
              />
            );
          })}
        </div>
        <h3 className={styles.nameOfCards}>Beard</h3>
        <div className={styles.cards}>
          {beard.map((element, index) => {
            return (
              <Card
                key={index}
                name={element.name}
                description={element.description}
                price={element.price}
                duration={element.duration}
              />
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};
export default Price;
