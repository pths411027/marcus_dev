import styles from "./profile.module.css";
import { motion } from "framer-motion";
import { IMG } from "../../config/config";
import { TypeAnimation } from "react-type-animation";
import { selfIntro } from "../../config/text";
export default function Profile({
  imgControls,
  contentControls,
  marginTopControls,
}) {
  return (
    <div className={styles.container}>
      <motion.img
        animate={imgControls}
        className={styles.img}
        src={IMG}
        style={{ marginTop: marginTopControls }}
      />
      <h1 className={styles.name}>marcus.dev</h1>
      <TypeAnimation
        sequence={[
          ...selfIntro,
          (el) => el.classList.remove(styles.custom_type_animation_cursor),
        ]}
        className={`${styles.self_introduction} ${styles.custom_type_animation_cursor}`}
        cursor={false}
        speed={80}
        deletionSpeed={80}
      />
    </div>
  );
}
