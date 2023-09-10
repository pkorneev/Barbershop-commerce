import styles from "./Contacts.module.css";
import Wrapper from "../../UI/Wrapper";
import Line from "../../UI/Line";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const Contacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.4, // Adjust the threshold as needed
  });

  return (
    <div className={styles.contactsWrapper}>
      <Wrapper>
        <Line />
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={styles.h2}
        >
          Where and when
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, type: "spring" }}
          className={styles.whereContent}
        >
          <div className={styles.whereColumn}>
            <h3 className={styles.h3}>Contacts</h3>
            <span className={styles.first}>+122 787 12 13</span>
            <span>barbershop@gmail.com</span>
            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={styles.reserveBtn}
              >
                Make reservation
              </motion.button>
            </Link>
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
        </motion.div>
      </Wrapper>
    </div>
  );
};
export default Contacts;
