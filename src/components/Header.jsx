import styles from "./Header.module.css";
import Wrapper from "../UI/Wrapper";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.backgroundImage}></div>
      <motion.div
        initial={{ opacity: 0, y: -69 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={styles.fixedHeader}
        id="myBoxParrent"
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
                  <a href="">Photo</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
              </ul>
            </nav>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.reserveBtn}
            >
              Make reservation
            </motion.button>
          </header>
        </Wrapper>
      </motion.div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${styles.reserveBtn} ${styles.second}`}
          >
            Make reservation
          </motion.button>
        </motion.div>
      </Wrapper>
    </div>
  );
};
export default Header;
