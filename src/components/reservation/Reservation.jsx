import styles from "./Reservation.module.css";
import ReservationHeader from "./ReservationHeader";
import Wrapper from "../../UI/Wrapper";
import Footer from "../Footer";
import Form from "./Form";
import Line from "../../UI/Line";
const Reservation = () => {
  return (
    <div className={styles.reservationWrapper}>
      <ReservationHeader />
      <div className={styles.margin}></div>
      <Wrapper>
        <div className={styles.reservationContent}>
          <Line />
          <h2>Book a session</h2>
          <Form />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default Reservation;
