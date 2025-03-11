import styles from "./page.module.css";

const MealDetailsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill />
        </div>
        <div className={styles.headerText}>
          <h1>TITLE</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: "...",
          }}
        ></p>
      </main>
    </>
  );
};
export default Meal;
