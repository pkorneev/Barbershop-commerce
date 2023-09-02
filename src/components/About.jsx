import styles from "./About.module.css";
import Wrapper from "../UI/Wrapper";
import aboutImage from "../assets/about.jpeg";
const About = (props) => {
  return (
    <div className={styles.aboutWrapper}>
      <Wrapper>
        <div className={styles.imgContainer}>
          <img src={aboutImage} alt="photoBarber" className={styles.img} />
          <h2>Modern haircuts for a fair price</h2>
          <ul className={styles.services}>
            {props.content.map((el, id) => {
              return <li key={id}>{el}</li>;
            })}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};
export default About;
