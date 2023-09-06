import styles from "./Price.module.css";
import Wrapper from "../UI/Wrapper";
import Line from "../UI/Line";
import Card from "./Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const hair = [
  {
    name: "Only hair",
    description: "washing, haircut",
    price: 15,
    duration: "20 minutes",
  },
  {
    name: "Only beard",
    description: "shaving, haircut",
    price: 15,
    duration: "20 minutes",
  },
  {
    name: "Hair + beard",
    description: "washing, haircut, shaving, styling",
    price: 20,
    duration: "40 minutes",
  },
  {
    name: "Comfort hair",
    description:
      "washing, haircut, styling, massage, all you can drink, snacks",
    price: 25,
    duration: "40 minutes",
  },
  {
    name: "Comfort beard",
    description: "shaving, massage, all you can drink, snacks",
    price: 25,
    duration: "40 minutes",
  },
  {
    name: "All in",
    description:
      "washing, haircut, shaving, massage,  all you can drink, snacks",
    price: 30,
    duration: "60 minutes",
  },
];

const Price = () => {
  const [lastClickedHair, setLastClickedHair] = useState("");

  const hairClickedHandler = (name) => {
    if (lastClickedHair === name) {
      setLastClickedHair("");
    } else {
      setLastClickedHair(name);
    }
  };

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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={styles.reserveBtn}
          >
            Make reservation
          </motion.button>
        </motion.div>
        <h3 className={styles.nameOfCards}>Packages</h3>
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
          {hair.map((element) => {
            return (
              <Card
                key={element.name}
                name={element.name}
                description={element.description}
                price={element.price}
                duration={element.duration}
                onClick={hairClickedHandler}
                lastClicked={lastClickedHair}
              />
            );
          })}
        </motion.ul>
      </Wrapper>
    </div>
  );
};
export default Price;
