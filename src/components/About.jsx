import styles from "./About.module.css";
import Wrapper from "../UI/Wrapper";
import aboutImage from "../assets/about.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <div className={styles.aboutWrapper}>
      <Wrapper>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, type: "spring" }}
          className={styles.imgContainer}
        >
          <img src={aboutImage} alt="photoBarber" className={styles.img} />
          <h2>Modern haircuts for a fair price</h2>
        </motion.div>
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          className={styles.services}
        >
          {props.content.map((el, id) => {
            return (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                key={id}
              >
                {el}
              </motion.li>
            );
          })}
        </motion.ul>
      </Wrapper>
    </div>
  );
};
export default About;
