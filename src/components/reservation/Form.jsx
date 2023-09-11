import styles from "./Form.module.css";
import { motion } from "framer-motion";
const Form = () => {
  return (
    <motion.form
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.form}
    >
      <div className={styles.nameEmailPhone}>
        <label htmlFor="name">Name</label>
        <div className={styles.name}>
          <div className={styles.firstName}>
            <input type="text" id="name" />
            <p>First Name</p>
          </div>
          <div className={styles.lastName}>
            <input type="text" />
            <p>Last Name</p>
          </div>
        </div>
        <div className={styles.emailPhone}>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <p>example@example.com</p>
          </div>
          <div className={styles.phone}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="(000) 000-0000" />
            <p>Please enter a valid phone number.</p>
          </div>
        </div>
      </div>
      <p className={styles.labelServices}>Select Services</p>
      <div className={styles.services}>
        <div>
          <input type="radio" id="hair" name="service" />
          <label htmlFor="hair">Only Hair</label>
        </div>
        <div>
          <input type="radio" id="beard" name="service" />
          <label htmlFor="beard">Only Beard</label>
        </div>
        <div>
          <input type="radio" id="hairBeard" name="service" />
          <label htmlFor="hairBeard">Hair + Beard</label>
        </div>
        <div>
          <input type="radio" id="comfortHair" name="service" />
          <label htmlFor="comfortHair">Comfort Hair</label>
        </div>
        <div>
          <input type="radio" id="comfortBeard" name="service" />
          <label htmlFor="comfortBeard">Comfort Beard</label>
        </div>
        <div>
          <input type="radio" id="allIn" name="service" />
          <label htmlFor="allIn">All In</label>
        </div>
      </div>
      <p className={styles.dateAndTime}>Date And Time</p>
      <div className={styles.dateTime}>
        <input type="date" className={styles.date} />
        <select name="" id="" className={styles.time}>
          <option value="9:00">9:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
        </select>
      </div>
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </motion.form>
  );
};
export default Form;
