import styles from "./profile.module.css";
import { motion } from "framer-motion";
import { IMG } from "../../config/config";
import { TypeAnimation } from "react-type-animation";
import { selfIntro } from "../../config/text";
import { useState } from "react";
import useStore from "../../store";
export default function Profile({ imgControls, marginTopControls }) {
  const [key, setKey] = useState(0);
  const [status, setStatus] = useState(false);
  const isLoading = useStore((state) => state.isLoadingNum === 5);
  return (
    <div className={styles.container}>
      <motion.img
        animate={imgControls}
        className={styles.img}
        src={IMG}
        style={{ marginTop: marginTopControls }}
      />
      <h1 className={styles.name}>marcus.dev</h1>
      <motion.div
        onHoverStart={() => {
          if (!status) setTimeout(() => setKey((prev) => prev + 1), 300);
        }}
        style={{ cursor: "pointer" }}
      >
        {isLoading && (
          <TypeAnimation
            key={key}
            sequence={[
              200,
              () => {
                setStatus(true);
              },
              ...selfIntro,
              (el) => el.classList.remove(styles.custom_type_animation_cursor),
              () => {
                setStatus(false);
              },
            ]}
            className={`${styles.self_introduction} ${styles.custom_type_animation_cursor}`}
            cursor={false}
            speed={80}
            deletionSpeed={80}
          />
        )}
      </motion.div>
    </div>
  );
}
