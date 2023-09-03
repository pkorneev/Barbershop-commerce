import styles from "./Footer.module.css";
import Wrapper from "../UI/Wrapper";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Wrapper>
        <p>©All rights are reserved. Classic Barbershop.</p>
      </Wrapper>
    </div>
  );
};
export default Footer;
