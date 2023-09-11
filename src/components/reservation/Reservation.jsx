import styles from "./Reservation.module.css";
import ReservationHeader from "./ReservationHeader";
import Wrapper from "../../UI/Wrapper";
import Footer from "../Footer";
import Form from "./Form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import arrowImg from "../../assets/arrow.png";
const Reservation = () => {
  return (
    <div className={styles.reservationWrapper}>
      <ReservationHeader />
      <div className={styles.margin}></div>
      <Wrapper>
        <div className={styles.reservationContent}>
          <Link to="/">
            <motion.img
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              src={arrowImg}
              alt="Back"
              className={styles.img}
            />
          </Link>
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Book a session
          </motion.h2>
          <Form />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default Reservation;
