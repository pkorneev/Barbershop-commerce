import styles from "./Header.module.css";
import Wrapper from "../UI/Wrapper";
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.fixedHeader}>
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
            <button className={styles.reserveBtn}>Make reservation</button>
          </header>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={styles.mainContent}>
          <h1 className={styles.h1}>Classic Barbershop</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className={`${styles.reserveBtn} ${styles.second}`}>
            Make reservation
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default Header;
