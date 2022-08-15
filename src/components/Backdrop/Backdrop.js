import styles from "./backdrop.module.scss";

const Backdrop = ({ show, clicked }) => {
  return show ? (
    <div className={styles.backdrop} onClick={clicked}></div>
  ) : null;
};

export default Backdrop;
