import styles from "./About.module.css";
import Wrapper from "../UI/Wrapper";
import aboutImage from "../assets/about.jpeg";
import { motion } from "framer-motion";
const About = (props) => {
  return (
    <div className={styles.aboutWrapper}>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={styles.imgContainer}
        >
          <img src={aboutImage} alt="photoBarber" className={styles.img} />
          <h2>Modern haircuts for a fair price</h2>
        </motion.div>
        <motion.ul className={styles.services}>
          {props.content.map((el, id) => {
            return <li key={id}>{el}</li>;
          })}
        </motion.ul>
      </Wrapper>
    </div>
  );
};
export default About;
