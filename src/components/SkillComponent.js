import SkillLevel from "../SkillLevel";
import styles from "./SkillComponent.module.css";

const skillBarWidthClass = {};
skillBarWidthClass[SkillLevel.Novice] = "skillbar-novice";
skillBarWidthClass[SkillLevel.Beginner] = "skillbar-beginner";
skillBarWidthClass[SkillLevel.Intermediate] = "skillbar-intermediate";
skillBarWidthClass[SkillLevel.Proficient] = "skillbar-proficient";

const skillLevelText = {};
skillLevelText[SkillLevel.Novice] = "novice";
skillLevelText[SkillLevel.Beginner] = "beginner";
skillLevelText[SkillLevel.Intermediate] = "intermediate";
skillLevelText[SkillLevel.Proficient] = "proficient";

const SkillComponent = (props) => {
  return (
    <div className={styles["cont"]}>
      <div className={styles["img"]}>
        <img src={props.imgSrc} />
      </div>
      <div className={styles["detailsCont"]}>
        <p className={styles["skillName"]}>{props.text}</p>
        <div className={styles["level"]}>
          <div
            className={`${styles["greenBar"]} ${
              styles[skillBarWidthClass[props.level]]
            }`}
          ></div>
          <p className={styles["levelInText"]}>{skillLevelText[props.level]}</p>
        </div>
      </div>
    </div>
  );
};
export default SkillComponent;
