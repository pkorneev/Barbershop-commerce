import styles from "./Form.module.css";
import { motion } from "framer-motion";
import { MyContext } from "../../App";
import { useContext } from "react";
import { hair } from "../mainPage/Price";
const Form = () => {
  const { lastClickedHair, hairClickedHandler } = useContext(MyContext);
  return (
    <motion.form
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.form}
    >
      <div className={styles.nameEmailPhone}>
        <div className={styles.name}>
          <div className={styles.firstName}>
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.lastName}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
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
        {hair.map((elem, index) => {
          return (
            <div>
              <input
                type="radio"
                key={index}
                id={elem.name}
                checked={lastClickedHair === elem.name}
                onChange={() => hairClickedHandler(elem.name)}
              />
              <label htmlFor={elem.name} key={index}>
                {elem.name}
              </label>
            </div>
          );
        })}
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
