import styles from "./Card.module.css";
import { motion } from "framer-motion";
const Card = (props) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ type: "spring" }}
      className={styles.card}
    >
      <h4 className={styles.name}>{props.name}</h4>
      <p className={styles.description}>{props.description}</p>
      <span className={styles.price}>{props.price} $</span>
      <p className={styles.duration}>{props.duration}</p>
    </motion.li>
  );
};
export default Card;
