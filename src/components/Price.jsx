import styles from "./Price.module.css";
import Wrapper from "../UI/Wrapper";
import Line from "../UI/Line";
import Card from "./Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [hairRef, hairInView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });
  const [beardRef, beardInView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });
  return (
    <div className={styles.priceWrapper}>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className={styles.priceHeader}
        >
          <Line />
          <h2 className={styles.h2}>Types of haircuts with prices</h2>
          <p className={styles.text}>
            We do not cut according to templates, we have a personal approach to
            each visitor. We make haircuts according to the shape of the head,
            face and hair type.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            className={styles.reserveBtn}
          >
            Make reservation
          </motion.button>
        </motion.div>
        <h3 className={styles.nameOfCards}>Hair</h3>
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          ref={hairRef}
          initial="hidden"
          animate={hairInView ? "visible" : "hidden"}
          className={styles.cards}
        >
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
        </motion.ul>
        <h3 className={styles.nameOfCards}>Beard</h3>
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          ref={beardRef}
          initial="hidden"
          animate={beardInView ? "visible" : "hidden"}
          className={styles.cards}
        >
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
        </motion.ul>
      </Wrapper>
    </div>
  );
};
export default Price;
