import styles from "./Form.module.css";
import { motion } from "framer-motion";
import { MyContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import { hair } from "../mainPage/Price";
import useInput from "../../hooks/useInput";
const Form = () => {
  const { lastClickedHair, hairClickedHandler } = useContext(MyContext);
  const [hairHasError, setHairHasError] = useState(false);
  useEffect(() => {
    if (lastClickedHair !== "") {
      setHairHasError(false);
    }
  }, [lastClickedHair]);
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
    setIsTouched: setFirstNameIsTouched,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
    setIsTouched: setLastNameIsTouched,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    setIsTouched: setEmailIsTouched,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: number,
    isValid: numberIsValid,
    hasError: numberHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
    setIsTouched: setNumberIsTouched,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: date,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
    setIsTouched: setDateIsTouched,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: time,
    isValid: timeIsValid,
    hasError: timeHasError,
    valueChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    reset: resetTimeInput,
    setIsTouched: setTimeIsTouched,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    numberIsValid &&
    dateIsValid &&
    timeIsValid &&
    lastClickedHair !== ""
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setEmailIsTouched(true);
      setFirstNameIsTouched(true);
      setLastNameIsTouched(true);
      setNumberIsTouched(true);
      setDateIsTouched(true);
      setTimeIsTouched(true);
      if (lastClickedHair === "") setHairHasError(true);
    }
  };
  return (
    <motion.form
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={styles.form}
      onSubmit={onSubmitHandler}
    >
      <div className={styles.nameEmailPhone}>
        <div className={styles.name}>
          <div className={styles.firstName}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              className={
                firstNameHasError
                  ? `${styles.firstNameInput} ${styles.err}`
                  : styles.firstNameInput
              }
              placeholder={firstNameHasError ? "Enter your first name!" : ""}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={firstName}
            />
          </div>
          <div className={styles.lastName}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className={
                lastNameHasError
                  ? `${styles.lastNameInput} ${styles.err}`
                  : styles.lastNameInput
              }
              placeholder={lastNameHasError ? "Enter your last name!" : ""}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={lastName}
            />
          </div>
        </div>
        <div className={styles.emailPhone}>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className={
                emailHasError
                  ? `${styles.emailInput} ${styles.err}`
                  : styles.emailInput
              }
              placeholder={emailHasError ? "Enter your email!" : ""}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={email}
            />
            <p>example@example.com</p>
          </div>
          <div className={styles.phone}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              className={
                numberHasError
                  ? `${styles.numberInput} ${styles.err}`
                  : styles.numberInput
              }
              placeholder={
                numberHasError ? "Enter your number!" : "+000 000 000 000"
              }
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
              value={number}
            />
            <p>Please enter a valid phone number.</p>
          </div>
        </div>
      </div>
      <p className={styles.labelServices}>Select Services</p>
      {hairHasError && (
        <p className={styles.errServices}>Please select service!</p>
      )}
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
        <input
          type="date"
          className={
            dateHasError ? `${styles.date} ${styles.err}` : styles.date
          }
          onChange={dateChangeHandler}
          onBlur={dateBlurHandler}
          value={date}
        />
        <select
          name=""
          id=""
          className={styles.time}
          onChange={timeChangeHandler}
          onBlur={timeBlurHandler}
          value={time}
        >
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
