import styles from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <div className={styles["section"]}>
      <div className={styles["locationSection"]}>
        <img className={styles["pin"]} src="./logos/location.jpeg" />
        <div className={styles["address"]}>
          <p className={styles["city"]}>Hyderabad</p>
          <p className={styles["country"]}>India</p>
        </div>
      </div>
      <div className={styles["socials"]}>
        <a href="https://www.linkedin.com/in/pranav-tuma">
          <img className={styles["linkedin"]} src="./logos/linkedin.png" />
        </a>
      </div>
      <div className={styles['endbar']}>
        <p className={styles['footerName']}>Pranav tuma</p>
      </div>
    </div>
  );
};
export default FooterSection;
