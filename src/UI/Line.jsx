import styles from "./Line.module.css";
import { motion } from "framer-motion";
const Line = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.line}
    ></motion.div>
  );
};
export default Line;
