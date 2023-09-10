import styles from "./ReservationHeader.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ReservationHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -69 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.header}
    >
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          LOGO
        </Link>
      </nav>
    </motion.header>
  );
};
export default ReservationHeader;
