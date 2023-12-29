import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div>
      <div className={styles["pageHeader"]}>
        <h1>pranav tuma</h1>
      </div>
      <div className={styles['heroImage']}>
        <img src='./hero-image.png'/>
      </div>
    </div>
  );
};
export default HeroSection;
