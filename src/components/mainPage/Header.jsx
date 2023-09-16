import styles from "./Header.module.css";
import Wrapper from "../../UI/Wrapper";
import { motion } from "framer-motion";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.backgroundImage}></div>
      <MobileHeader />
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={styles.mainContent}
          id="myBox"
        >
          <h1 className={styles.h1}>Classic Barbershop</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="/reservation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`${styles.reserveBtn} ${styles.second}`}
            >
              Make reservation
            </motion.button>
          </Link>
        </motion.div>
      </Wrapper>
    </div>
  );
};
export default Header;
