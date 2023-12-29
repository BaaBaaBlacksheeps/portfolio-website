import SkillLevel from "../SkillLevel";
import SkillComponent from "./SkillComponent";
import styles from "./SkillsSection.module.css";


const skills = [
  { img: "./logos/html.png", text: "HTML", level: SkillLevel.Intermediate },
  { img: "./logos/css.png", text: "CSS", level: SkillLevel.Intermediate },
  { img: "./logos/js.png", text: "JavaScript", level: SkillLevel.Intermediate },
  { img: "./logos/nextjs.png", text: "NextJS", level: SkillLevel.Novice },
  { img: "./logos/react.png", text: "React", level: SkillLevel.Beginner },
  { img: "./logos/figma.png", text: "Figma", level: SkillLevel.Novice },
  {
    img: "./logos/expressjs.png",
    text: "ExpressJS",
    level: SkillLevel.Beginner,
  },
  { img: "./logos/mongodb.png", text: "MongoDB", level: SkillLevel.Beginner },
  { img: "./logos/mysql.png", text: "MySQL", level: SkillLevel.Beginner },
  { img: "./logos/wpf.png", text: "WPF", level: SkillLevel.Novice },
  {
    img: "./logos/arduino.png",
    text: "Arduino",
    level: SkillLevel.Intermediate,
  },
  { img: "./logos/kicad.png", text: "KiCAD", level: SkillLevel.Intermediate },
  { img: "./logos/f360.png", text: "Fusion 360", level: SkillLevel.Beginner },
  { img: "./logos/threejs.png", text: "ThreeJS", level: SkillLevel.Novice },
];

const SkillsSection = () => {
  return (
    <div className={styles["section"]}>
      <h2 className={styles['heading']}>Skills_</h2>
      <div className={styles["container"]}>
        {skills.map((skillData,index) => (
          <SkillComponent
            key={index}
            imgSrc={skillData.img}
            text={skillData.text}
            level={skillData.level}
          />
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
