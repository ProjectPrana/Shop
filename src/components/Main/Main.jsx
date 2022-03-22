import styles from "./Main.module.scss";

function Main({children}) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__bloсk}>
          <h1 className={styles.mainTitle}>
            Best sneakers <br /> <span> in the world </span>
          </h1>
          <button type="button" className={styles.mainButton}>
            Подробнее
          </button>
        </div>
      </div>
      {children}
    </>
  );
}

export default Main;
