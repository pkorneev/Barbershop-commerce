import styles from "./Header.module.css";
import Wrapper from "../UI/Wrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
const Header = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [boxTop, setBoxTop] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const boxElement = document.getElementById("myBox"); // Replace 'myBox' with the actual ID of your box
    const boxRect = boxElement.getBoundingClientRect();
    setBoxTop(boxRect.top);
    setBoxHeight(boxRect.height);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { scrollY } = useScroll();
  const spaceBelowBox = windowHeight - (boxTop + boxHeight);

  const yContent = useTransform(
    scrollY,
    [0, spaceBelowBox],
    [0, spaceBelowBox]
  );
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.backgroundImage}></div>
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
          style={{ y: yContent }}
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
