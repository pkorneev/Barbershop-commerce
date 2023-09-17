import styles from "./Confirmation.module.css";
const Confirmation = (props) => {
  return (
    <div
      className={styles.confirmationWrapper}
      onClick={() => {
        props.onClose(false);
        props.onReset();
      }}
    >
      <div
        className={styles.confirmContent}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h2>{props.name}, Thank you for your reservation.</h2>
        <p>
          If you need to cancel or modify your reservation, you can do so by
          contacting us directly.
        </p>

        <button
          onClick={() => {
            props.onClose(false);
            props.onReset();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Confirmation;
