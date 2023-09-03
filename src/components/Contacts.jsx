import styles from "./Contacts.module.css";
import Wrapper from "../UI/Wrapper";
import Line from "../UI/Line";
import { motion } from "framer-motion";
const Contacts = () => {
  return (
    <div className={styles.contactsWrapper}>
      <Wrapper>
        <Line />
        <h2 className={styles.h2}>Where and when</h2>
        <div className={styles.whereContent}>
          <div className={styles.whereColumn}>
            <h3 className={styles.h3}>Contacts</h3>
            <span className={styles.first}>+122 787 12 13</span>
            <span>barbershop@gmail.com</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className={styles.reserveBtn}
            >
              Make reservation
            </motion.button>
          </div>
          <div className={styles.whereColumn}>
            <h3 className={styles.h3}>Opening hours</h3>
            <span className={styles.first}>Mon-Fri / 9:00 - 17:00</span>
            <span>Sun-Sat / 9:00 - 13:30</span>
          </div>
          <div className={styles.whereColumn}>
            <h3 className={styles.h3}>Adress</h3>
            <span className={styles.first}>Oxford</span>
            <span>Headington</span>
            <span>33 Lime Walk, 60200</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Contacts;
