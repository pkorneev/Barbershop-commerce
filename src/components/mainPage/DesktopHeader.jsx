import styles from "./DesktopHeader.module.css";
import Wrapper from "../../UI/Wrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const DesktopHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -69 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.fixedHeader}
    >
      <Wrapper>
        <header className={styles.header}>
          <a href="" className={styles.logo}>
            LOGO
          </a>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Price</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </nav>
          <Link to="/reservation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.reserveBtn}
            >
              Make reservation
            </motion.button>
          </Link>
        </header>
      </Wrapper>
    </motion.div>
  );
};
export default DesktopHeader;
