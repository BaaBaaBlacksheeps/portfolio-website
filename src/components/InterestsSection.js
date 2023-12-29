import styles from './InterestsSection.module.css'

const InterestsSection = () => {
    return (
        <div className={styles["section"]}>
          <h2 className={styles['heading']}>Interests_</h2>
          <div className={styles["container"]}>
            <div className={styles['interest']}><p>Web /App Dev</p></div>
            <div className={styles['interest']}><p>Real Time Sys Dev</p></div>
            <div className={styles['interest']}><p>IoT</p></div>
            <div className={styles['interest']}><p>Robotics</p></div>
          </div>
        </div>
      );
}
export default InterestsSection

