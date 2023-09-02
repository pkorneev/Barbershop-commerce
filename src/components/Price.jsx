import styles from "./Price.module.css";
import Wrapper from "../UI/Wrapper";
import Line from "../UI/Line";
const Price = () => {
  return (
    <div className={styles.priceWrapper}>
      <Wrapper>
        <div className={styles.priceHeader}>
          <Line />
          <h2 className={styles.h2}>Types of haircuts with prices</h2>
          <p className={styles.text}>
            We do not cut according to templates, we have a personal approach to
            each visitor. We make haircuts according to the shape of the head,
            face and hair type.
          </p>
          <button className={styles.reserveBtn}>Make reservation</button>
        </div>
      </Wrapper>
    </div>
  );
};
export default Price;
