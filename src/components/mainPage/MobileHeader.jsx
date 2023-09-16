import styles from "./MobileHeader.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hamburgerImg from "../../assets/hamburger.svg";
import closeImg from "../../assets/close.svg";
import { useRef } from "react";

const MobileHeader = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
  };
  const closeNavbar = () => {
    navRef.current.classList.remove(styles.responsiveNav);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -69 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.fixedHeader}
    >
      <header className={styles.header}>
        <a href="" className={styles.logo}>
          LOGO
        </a>

        <nav ref={navRef}>
          <ul className={styles.ul}>
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
            <li>
              <Link to="/reservation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={styles.reserveBtn}
                >
                  Make reservation
                </motion.button>
              </Link>
            </li>
            <li>
              <button
                className={`${styles.imgBtn} ${styles.navCloseBtn}`}
                onClick={showNavbar}
              >
                <img src={closeImg} alt="close" className={styles.img} />
              </button>
            </li>
          </ul>
        </nav>
        <button className={styles.imgBtn} onClick={showNavbar}>
          <img src={hamburgerImg} alt="ham" className={styles.img} />
        </button>
      </header>
    </motion.div>
  );
};
export default MobileHeader;
