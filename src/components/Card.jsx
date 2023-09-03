import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{props.name}</h4>
      <p className={styles.description}>{props.description}</p>
      <span className={styles.price}>{props.price} $</span>
      <p className={styles.duration}>{props.duration}</p>
    </div>
  );
};
export default Card;
